import {StyleSheet} from 'react-native';
import variables from './variables';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: variables.background,
    borderColor: variables.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 15,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
  title: {
    color: variables.title,
    marginBottom: 7,
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    color: variables.message,
  },
  avatar: {
    marginRight: 15,
  },
});
