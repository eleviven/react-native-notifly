import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../avatar';
import styles from '../../styles/card.style';

export default function Card({title, message, avatar}) {
  return (
    <View style={styles.card}>
      {avatar && <Avatar source={avatar} style={styles.avatar} />}
      <View style={styles.content}>
        {title && <Text style={styles.title}>{title}</Text>}
        {message && (
          <Text style={styles.message} numberOfLines={1}>
            {message}
          </Text>
        )}
      </View>
    </View>
  );
}
