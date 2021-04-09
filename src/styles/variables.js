import {Appearance} from 'react-native';

const light = {
  title: '#000',
  message: '#000',
  border: '#ddd',
  background: '#fff',
};

const dark = {
  title: '#fff',
  message: 'rgba(255,255,255, 0.8)',
  border: '#000',
  background: '#333',
};

export default Appearance.getColorScheme() === 'dark' ? dark : light;
