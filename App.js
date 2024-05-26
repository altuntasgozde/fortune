import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Entrypage from "./app/Entrypage";
import Homepage from "./app/Homepage";
import PostDetail from "./app/PostDetail";
import { StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Entrypage">
          <Stack.Screen
            name="Entrypage"
            component={Entrypage}
            options={{
              title: "Entry Page",
              headerStyle: {
                backgroundColor: "#181818",
              },
              headerTintColor: "#fff", 
            }}
          />
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ title: "Blog Posts" }}
          />
          <Stack.Screen
            name="PostDetail"
            component={PostDetail}
            options={{ title: "Post Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",

    justifyContent: "center",
    padding: 16,
  },
});
