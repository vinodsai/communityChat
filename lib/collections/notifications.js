Notifications = new Mongo.Collection('Notifications');
Notifications.allow({
  insert: function(){
    return false;
  }
});
