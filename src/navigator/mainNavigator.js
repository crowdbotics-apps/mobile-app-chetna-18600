import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile74627Navigator from '../features/UserProfile74627/navigator';
import Settings74629Navigator from '../features/Settings74629/navigator';
import Settings74637Navigator from '../features/Settings74637/navigator';
import ArticleList74587Navigator from '../features/ArticleList74587/navigator';
import ArticleList74589Navigator from '../features/ArticleList74589/navigator';
import ArticleList74588Navigator from '../features/ArticleList74588/navigator';
import BlankScreen874111Navigator from '../features/BlankScreen874111/navigator';
import BlankScreen874105Navigator from '../features/BlankScreen874105/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile74627: { screen: UserProfile74627Navigator },
Settings74629: { screen: Settings74629Navigator },
Settings74637: { screen: Settings74637Navigator },
ArticleList74587: { screen: ArticleList74587Navigator },
ArticleList74589: { screen: ArticleList74589Navigator },
ArticleList74588: { screen: ArticleList74588Navigator },
BlankScreen874111: { screen: BlankScreen874111Navigator },
BlankScreen874105: { screen: BlankScreen874105Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
