import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon, withBadge, Button } from "react-native-elements";
import { Provider } from "react-redux";

import store from "./store";
import {
  LoginScreen,
  ProfileScreen,
  CollegeScreen,
  ProjectDetailScreen,
  TimesheetScreen,
  AlertsScreen,
} from "./src/screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabOrdersScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Colleges"
        component={CollegeScreen}
        options={{
          headerShown: false,
          title: "College List",
          tabBarLabel: "Colleges",
          tabBarIcon: ({ color }) => (
            <Icon type="font-awesome-5" name="school" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Web3"
        component={TimesheetScreen}
        options={{
          headerShown: false,
          title: "Web3",
          tabBarLabel: "Web3",
          tabBarIcon: ({ color }) => (
            <Icon type="font-awesome-5" name="coins" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon
              type="font-awesome-5"
              name="user-cog"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const BadgedIcon = withBadge(2)(Icon);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, title: "Login" }}
          />
          <Stack.Screen
            name="Main"
            component={TabOrdersScreens}
            options={({ route, navigation }) => ({
              headerShown: true,
              headerTitle: getHeaderTitle(route), // route.params ? route.params.title : '???'
              headerLeft: () => <View></View>,
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Alerts")}>
                  <BadgedIcon
                    type="font-awesome-5"
                    name="bell"
                    size={20}
                    color="#377cf6"
                    style={{ marginRight: 4, fontWeight: "400" }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="ProjectDetail"
            component={ProjectDetailScreen}
            options={{ title: "Projects detail" }}
          />
          <Stack.Screen
            name="Alerts"
            component={AlertsScreen}
            options={{ title: "Alerts" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator

  const routeName = getFocusedRouteNameFromRoute(route) ?? "Projects";
  console.log(route, routeName);
  // debugger
  switch (routeName) {
    case "Colleges":
      return "College List";
    case "Web3":
      return "Web3 Tab";
    case "Profile":
      return "User Profile";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
