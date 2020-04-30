import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeTabs from './HomeTabs';

const AuthNavigator = createSwitchNavigator(
  {
    Home: HomeTabs,
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      backgroundColor: '#43484d',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    }
  }
);

const RootNavigator = createAppContainer(AuthNavigator);

export default RootNavigator;
