FlowRouter.route('/', {
  name:'home',
  action: function() {
    BlazeLayout.render("layout", {content: "home"});
  }
});
FlowRouter.route('/register', {
  name: 'register',
  action: function() {
    BlazeLayout.render('register');
  }
});
FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.render('login');
  }
});
FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('dashboard');
  }
});
FlowRouter.route('/feed',{
  name: 'feed',
  action: function(){
    BlazeLayout.render('feed');
  }
});
FlowRouter.route('/feed/:feed',{
  name: 'userFeed',
  action: function(){
    BlazeLayout.render("chatFeed");
  }
});
