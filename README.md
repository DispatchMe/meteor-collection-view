dispatch:collection-view
========================

Create collection views.

#### Usage

```js
  var foo = new Mongo.Collection('foo');

  var fooView = new CollectionView({
    collection: foo,
    transform: function(doc) {
      return {
        birthday: doc.birthday,
        age: calculateAge(doc.birthday),
        address: address.findOne(doc.addressId)
      };
    }
  });
```

`fooView` acts like a regular `Mongo.Collection` and will update by observing on `foo`.

This allows sorting by dynamically generated attributes.

#### Api

There are two functions added:
* `foo.stop();` - This will stop the view and clear the view
* `foo.start();` - This will start the view or throw an error if already started

Note: Using the start will default values but you can also change the values `foo.start(selector, transform)`
