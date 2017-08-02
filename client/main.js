import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe('allChannels');
Meteor.subscribe('allFeeds');
Meteor.subscribe('user');
Meteor.subscribe('allMessages');
Meteor.subscribe('allNotifications');
