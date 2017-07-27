import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish("allChannels", function () {
  return Channels.find();
});
Meteor.publish("user",
  function () {
    return Meteor.users.find();
  }
);
Meteor.publish("allFeeds", function () {
  return Feeds.find();
});
Meteor.publish("allMessages", function () {
  return Messages.find();
});
Meteor.publish('allFriends', function(){
  return Friends.find();
})
Meteor.publish('allNotifications', function(){
  return Notifications.find();
})
