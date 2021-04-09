import {NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

export const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
export const NOTIFICATION_BEHAVIOUR = {
  SWIPE: 'swipe',
  CLEAR: 'clear',
  OVER: 'over',
};
export const DISTANCE = {
  FROM: -150,
  TO: 0,
};
