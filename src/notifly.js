import React, {Component} from 'react';
import NotiflyManager from './notifly-manager';
import NotiflyItem from './notifly-item';
import {generateRandomInt} from './utils';
import {NOTIFICATION_BEHAVIOUR} from './constants';

export const fire = notification => {
  const ref = NotiflyManager.getDefault();
  ref.fire(notification);
};

export const remove = id => {
  const ref = NotiflyManager.getDefault();
  ref.remove(id);
};

export class Notifly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
    this._id = generateRandomInt();
  }
  componentDidMount() {
    // Register Notifly to Manager
    NotiflyManager.register(this);
  }
  componentWillUnmount() {
    // Unregister Notifly from Manager
    NotiflyManager.unregister(this);
  }
  // Add new notification
  fire(notification) {
    const {options} = notification;
    switch (options?.behaviour) {
      case NOTIFICATION_BEHAVIOUR.SWIPE:
        this.hideNotifications();
        break;
      case NOTIFICATION_BEHAVIOUR.CLEAR:
        this.clearNotifications();
        break;
      case NOTIFICATION_BEHAVIOUR.OVER:
        break;
      default:
        this.hideNotifications();
    }
    notification.id = generateRandomInt();
    notification.status = true;
    this.setState(prevState => ({
      notifications: [...prevState.notifications, notification],
    }));
  }
  // Remove notification by id
  remove(id) {
    this.setState({
      notifications: this.state.notifications.filter(
        notification => notification.id !== id,
      ),
    });
  }
  // Change notifications status to false
  hideNotifications(callback) {
    this.setState(
      prevState => ({
        notifications: prevState.notifications.map(notification => ({
          ...notification,
          status: false,
        })),
      }),
      callback,
    );
  }
  // Clear all notifications
  clearNotifications(callback) {
    this.setState({notifications: []}, callback);
  }
  render() {
    return this.state.notifications.map(notification => (
      <NotiflyItem
        key={notification.id}
        notification={notification}
        onLeaveComplete={() => this.remove(notification.id)}
      />
    ));
  }
}
