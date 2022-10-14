import React from 'react';
import HomeScreen from '../../screens/Home/homeScreen';
import NoteScreen from '../../screens/Notes/NoteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const AppStack = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Notes" component={NoteScreen} />
            </Tab.Navigator>
        </NavigationContainer>

    );
};

export default AppStack;
