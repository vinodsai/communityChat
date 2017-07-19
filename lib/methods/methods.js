Meteor.methods({
  addChannel: function(channel){
    Channels.insert({
      channel: channel,
      createdAt: new Date()
    });
  },
  addToFeed: function(channel){
    Feeds.insert({
      feed: channel,
      user: Meteor.userId()
    });
  },
  addMessage: function(category,message){
    Messages.insert({
      user: Meteor.userId(),
      message: message,
      category: category,
      username: Meteor.user().username,
      createdAt: new Date()
    });
  }
})
