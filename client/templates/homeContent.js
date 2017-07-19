Template.homeContent.helpers({
  allChannel: function(){
    return Channels.find();
  }
})
Template.homeContent.events({
  'click #addFeed': function(){
    Meteor.call('addToFeed', this.channel);
  }
})
