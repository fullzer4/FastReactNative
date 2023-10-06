import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard as React.ComponentType}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
