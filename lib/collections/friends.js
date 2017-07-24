Friends = new Mongo.Collection('Friends');
Friends.allow({
  insert: function(){
    return false;
  }
});
