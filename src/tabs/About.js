import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import ProfileScreen from '../screens/ProfileScreen';

import config from '../config/stack';

const About = createStackNavigator(
  {
    Home: {
      screen: ProfileScreen,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        title: 'Covid 19 NOVEL',
        headerTitleStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: 'rgba(47,44,60,1)',
          borderBottomWidth: 0,
        },
      }),
    },
  },
  config
);

export default About;
