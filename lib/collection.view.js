CollectionView = class CollectionView extends Mongo.Collection {
  constructor({collection, transform, selector={} } = {}) {
    check(collection, Mongo.Collection);
    check(transform, Function);
    super(null, { connection: null });

    this.selector = selector;
    this.collection = collection;
    this.transform = transform;
    this.start();
  }

  start(selector=this.selector, transform=this.transform) {
    if (this.observer) {
      throw new Error('View is already observing');
    }
    this.observer = this.collection
      .find(selector, { transform })
      .observe({
        added: (doc) => { this.insert(doc); },
        changed: (doc) => { this.update(doc._id, doc); },
        removed: (doc) => { this.remove(doc._id); },
      });
  }

  stop() {
    if (this.observer) {
      // 1. Stop observer
      this.observer.stop();
      // 2. Remove observer reference
      this.observer = null;
      // 2. Clear this view collection
      this.remove({});
    }
  }
}
