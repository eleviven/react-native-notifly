import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, TouchableOpacity, PanResponder} from 'react-native';
import Card from './components/card';
import {DISTANCE} from './constants';
import styles from './styles/general.styles';

export default function NotiflyItem({notification, onLeaveComplete, ...props}) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const panValue = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [DISTANCE.FROM, DISTANCE.TO],
  });
  const translatePanY = panValue.y.interpolate({
    inputRange: [-130, 0],
    outputRange: [-130, 0],
    extrapolate: 'clamp',
  });
  const animateIn = useRef();
  const animateOut = useRef();
  const options = {
    duration: 2000,
    ...notification.options,
  };

  animateIn.current = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  animateOut.current = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(onLeaveComplete);
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState) => {},
        onPanResponderRelease: (e, gestureState) => {
          const positionY = panValue.y.__getValue();
          if (positionY <= DISTANCE.TO - 15) {
            animateOut.current();
          } else {
            Animated.timing(panValue, {
              toValue: {x: 0, y: 0},
              duration: 150,
              useNativeDriver: true,
            }).start();
          }
        },
        onPanResponderMove: Animated.event(
          [null, {dy: panValue.y, dx: panValue.x}],
          {
            useNativeDriver: false,
          },
        ),
      }),
    [panValue],
  );

  useEffect(() => {
    const timeout = () => animateOut.current();
    setTimeout(timeout, options.duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [options.duration]);

  useEffect(() => {
    animateIn.current();
    return () => {
      animateOut.current();
    };
  }, []);

  useEffect(() => {
    if (!notification.status) {
      animateOut.current();
    }
  }, [notification]);

  const renderComponent = () => {
    const {component} = notification;
    if (!component) {
      return (
        <Card
          title={notification.title}
          message={notification.message}
          avatar={notification.avatar}
        />
      );
    }
    switch (typeof component) {
      case 'function':
        return component(notification);
      default:
        return component;
    }
  };

  const handlePress = () => {
    const {onPress} = notification;
    if (onPress && typeof onPress === 'function') {
      onPress(notification);
    }
  };

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [{translateY}, {translateY: translatePanY}],
        },
      ]}
      {...panResponder.panHandlers}
      {...props}>
      <TouchableOpacity onPress={handlePress}>
        {renderComponent()}
      </TouchableOpacity>
    </Animated.View>
  );
}
