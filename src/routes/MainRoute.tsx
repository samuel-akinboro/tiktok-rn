import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DISCOVER_SCREEN, HOME_SCREEN, INBOX_SCREEN, ME_SCREEN } from "../utils/Constants";
import HomeScreen from "../screens/Home/Index";
import DiscoverScreen from "../screens/DiscoverScreen";
import InboxScreen from "../screens/InboxScreen";
import MeScreen from "../screens/MeScreen";

const MainRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={DISCOVER_SCREEN} component={DiscoverScreen} />
      <Tab.Screen name={INBOX_SCREEN} component={InboxScreen} />
      <Tab.Screen name={ME_SCREEN} component={MeScreen} />
    </Tab.Navigator>
  )
}

export default MainRoute;