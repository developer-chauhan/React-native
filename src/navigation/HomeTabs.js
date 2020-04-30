import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import Global from '../tabs/Global';
import Countries from '../tabs/Countries';
import About from '../tabs/About';

const TabBarComponent = props => <BottomTabBar {...props} />;

const HomeTabs = createBottomTabNavigator(
  {
    ButtonsTab: {
      screen: Global,
      path: '/global',
      navigationOptions: {
        tabBarLabel: 'Global',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={24}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    ListsTab: {
      screen: Countries,
      path: '/countries',
      navigationOptions: {
        tabBarLabel: 'Countries',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="list"
            size={24}
            type="entypo"
            color={tintColor}
          />
        ),
      },
    },
    ProfileTab: {
      screen: About,
      path: '/about',
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="person"
            size={24}
            type="material"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
    tabBarComponent: props => {
      const currentIndex = props.navigation.state.index;
      return (
        <TabBarComponent
          {...props}
          // style={
          //   currentIndex === 3 && {
          //     backgroundColor: 'rgba(47,44,60,1)',
          //     borderTopWidth: 0,
          //   }
          // }
          navigation={{
            ...props.navigation,
            state: {
              ...props.navigation.state,
              routes: props.navigation.state.routes,
            },
          }}
        />
      );
    },
  }
);

export default HomeTabs;
