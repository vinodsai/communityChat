
Template.feed.helpers({
  userFeed: function(){
    return Feeds.find()
  },
  userName: function(){
    return Meteor.user();
  }
})
