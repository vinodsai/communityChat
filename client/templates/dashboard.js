Template.dashboard.events({
  'click #channeladd': function(event){
    var channel = $('#addChannel').val();
    Meteor.call('addChannel',channel);
    event.preventDefault();
    $('#addChannel').val('');
  }
})
