import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../Views/Dashboard";
import Destination from "../Views/Destination";
import Pickup from "../Views/Pickup";
import SelectCar from "../Views/CarSelection";
import RideHistory from "../Views/RideHistory";
import RideHistoryDetail from "../Views/RideHistoryDetail";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Pickup" component={Pickup} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="SelectCar" component={SelectCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Pickup" component={Pickup} />
      <Drawer.Screen name="Destination" component={Destination} />
      <Drawer.Screen name="SelectCar" component={SelectCar} />
      <Drawer.Screen name="RideHistory" component={RideHistory} />
      <Drawer.Screen name="RideHistoryDetail" component={RideHistoryDetail} />
    </Drawer.Navigator>
  );
}

export default MainNavigator;
