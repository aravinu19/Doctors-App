import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Activities/HomeActivity';
import SearchActivity from './Activities/SearchActivity';
import DoctorProfile from './Activities/DoctorProfile';

const MainNavigator = createStackNavigator({
    Home: Home,
    Search: SearchActivity,
    DoctorProfile: DoctorProfile
  },
  {
    initialRouteName: 'Home',
    headerMode: "none"
  }
);
  
  const AppNavigator = createAppContainer(MainNavigator);
  
  export default AppNavigator;