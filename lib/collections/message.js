Messages = new Mongo.Collection('Messages');
Messages.allow({
  insert: function(){
    return false;
  }
});
