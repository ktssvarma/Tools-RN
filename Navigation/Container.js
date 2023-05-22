import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './ScreensList';

const Stack = createNativeStackNavigator();

export class Container extends Component {
  render() {
    const HomeStack=()=>{
        return (
          <Stack.Navigator initialRouteName='Home'>
            {screens.map((screen,index)=>{
                return (
                  <Stack.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    options={{
                      headerShown: screen.headerShown,
                      headerTitleAlign: 'center',
                      headerTitle: screen.title,
                    }}
                  />
                );
            })}
            
          </Stack.Navigator>
        );
    }
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  }
}

export default Container;
