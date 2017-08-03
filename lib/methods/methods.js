Meteor.methods({
  addChannel: function(channel){
    Channels.insert({
      channel: channel,
      createdAt: new Date()
    });
  },
  addToFeed: function(channel, id){
    Feeds.insert({
      feed: channel,
      user: Meteor.userId(),
      username: Meteor.user().username,
      feedId : id
    });
  },
  removeFeed: function(channelId) {
    Feeds.remove({feedId: channelId})
  },
  addMessage: function(category,message){
    Messages.insert({
      messageOwner: Meteor.userId(),
      message: message,
      category: category,
      username: Meteor.user().username,
      createdAt: new Date()
    });
  },
  addNotification: function(friendName, friendId){
    Notifications.insert({
      requestFrom: Meteor.userId(),
      requestFromName:Meteor.user().username,
      requestTo:friendId,
      requestToName:friendName,
      read: false,
      createdAt: new Date()
    });
  },
  addFriend: function(userName,userId){
    Friends.insert({
      userId: Meteor.userId(),
      userName:Meteor.user().username,
      friendId : userId,
      friendName: userName,
      createdAt: new Date()
    });
  },
  removeNotification: function(id) {
    Notifications.remove({_id:id});
  },
  removeFriend: function(id){
    Friends.remove({_id: id});
  },
  removeNotificationFromFriend: function(id){
    Notifications.remove({requestFrom: id});
  }
})
