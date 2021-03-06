import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import ProductsShowScreen from "./src/screens/ProductsShowScreen";
import searchScreen from "./src/screens/searchScreen";
import CartIcon from "./src/components/CartIcon";
import cartScreen from "./src/screens/cartScreen";
import Browser from "./src/screens/Browser";
import AllProducts from "./src/screens/AllProducts";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderScreen from "./src/screens/OrderScreen";
import UserOrderDetails from "./src/screens/UserOrderDetails";
import LoginForm from "./src/components/LoginForm";

import Icon from "react-native-vector-icons/FontAwesome";

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false,
      tabBarVisible: false
    }
  }
});

const HomeStack = createStackNavigator({
  Home: {
    screen: searchScreen,
    navigationOptions: {
      headerShown: false,
      headerLeft: null
    }
  },
  AllProducts: {
    screen: AllProducts,
    navigationOptions: {
      headerTitle: "Products",
      headerRight: () => <CartIcon />,
      headerStyle: {
        backgroundColor: "#922c88"
      }
    }
  },
  ProductsShowScreen: {
    screen: ProductsShowScreen,
    navigationOptions: {
      headerTitle: "Product Details",
      headerRight: () => <CartIcon />,
      headerStyle: {
        backgroundColor: "#922c88"
      }
    }
  }
});
const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: "Profile",
      headerTintColor: "#fff",
      headerRight: () => <CartIcon />,
      headerStyle: {
        backgroundColor: "#922c88"
      }
    }
  }
});
const OrderStack = createStackNavigator({
  order: {
    screen: UserOrderDetails,
    navigationOptions: {
      headerTitle: "My Orders",
      headerTintColor: "#fff",
      headerRight: () => <CartIcon />,
      headerStyle: {
        backgroundColor: "#922c88"
      }
    }
  }
});

const CartStack = createStackNavigator({
  cartScreen: {
    screen: cartScreen,
    navigationOptions: {
      headerTitle: "Cart",
      headerTintColor: "#fff",
      headerRight: () => <CartIcon />,
      headerStyle: {
        backgroundColor: "#922c88"
      }
    }
  },
  Browser: {
    screen: Browser,
    navigationOptions: {
      headerShown: false
    }
  }
});
const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home",
      headerTintColor: "#fff",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      )
    }
  },
  Order: {
    screen: OrderStack,
    navigationOptions: {
      tabBarLabel: "My Orders",
      headerTintColor: "#fff",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list-alt" color={tintColor} size={24} />
      )
    }
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
      tabBarLabel: "Cart",
      headerTintColor: "#fff",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="shopping-cart" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: "Profile",
      headerTintColor: "#fff",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={24} />
      )
    }
  }
});
const SwitchApp = createSwitchNavigator({
  // Auth: {
  //   screen: AuthStack
  // },
  SwitchApp: {
    screen: MainTabs
  }
});

export default createAppContainer(SwitchApp);

// const navigator = createStackNavigator(
//   {
//     LoginScreen:{
//       screen: searchScreen,
//       navigationOptions: {
//         headerShown: false
//       }
//     },
//     Search:{
//       screen: searchScreen,
//       navigationOptions: {
//         headerLeft: null
//
//       }
//     },
//     ProductsShow:{
//       screen: ResultsShowScreen,
//       navigationOptions: {
//         headerTitle: "Results"
//       }
//     },
//     cartScreen:{
//       screen: cartScreen,
//       navigationOptions: {
//         headerTitle: "Cart",
//         headerStyle: {
//           backgroundColor: '#922c88'
//         }
//       }
//     },
//     ProductsShowScreen: {
//       screen: ProductsShowScreen,
//       navigationOptions: {
//         headerTitle: "Product Details",
//         headerRight:()=> <CartIcon />,
//         headerStyle: {
//           backgroundColor: '#922c88'
//         }
//       }
//     },
//     AllProducts: {
//       screen: AllProducts,
//       navigationOptions: {
//         headerTitle: "Products",
//         headerRight:()=> <CartIcon />,
//         headerStyle: {
//           backgroundColor: '#922c88'
//         }
//       }
//     }
//   },
//   {
//     initialRouteName: "LoginScreen"
//     // ,
//     // defaultNavigationOptions: {
//     //   title: "Please Login"
//     // }
//   }
// );
