import React from 'react';
import {Image} from 'react-native';
import styles from '../../styles/avatar.style';

export default function Avatar({source, resizeMode, style, ...props}) {
  return (
    <Image
      source={source}
      width="100%"
      height="100%"
      resizeMode={resizeMode}
      style={[styles.avatar, style]}
      {...props}
    />
  );
}

Avatar.defaultProps = {
  resizeMode: 'cover',
};
