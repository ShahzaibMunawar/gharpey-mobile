import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./screens/ResultsShowScreen";
import searchScreen from "./screens/searchScreen";
//
const navigator = createStackNavigator(
  {
    Search: searchScreen,
    ResultShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
