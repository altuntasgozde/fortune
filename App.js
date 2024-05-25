import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entrypage from './app/Entrypage';
import Homepage from './app/Homepage';
import PostDetail from './app/PostDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrypage">
        <Stack.Screen name="Entrypage" component={Entrypage} options={{ title: 'Entry Page' }} />
        <Stack.Screen name="Homepage" component={Homepage} options={{ title: 'Blog Posts' }} />
        <Stack.Screen name="PostDetail" component={PostDetail} options={{ title: 'Post Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
