Feeds = new Mongo.Collection('Feeds');
Feeds.allow({
  insert: function(){
    return false;
  }
});
