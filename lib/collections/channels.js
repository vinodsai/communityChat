Channels = new Mongo.Collection('Channels');
Channels.allow({
  insert: function(){
    return false;
  }
});
