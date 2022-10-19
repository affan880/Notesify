import React from 'react';
import HomeScreen from '../../screens/Home/homeScreen';
import NoteScreen from '../../screens/Notes/NoteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const AppStack = () => {
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Notes" component={NoteScreen} />
            </Tab.Navigator>
    );
};

export default AppStack;
