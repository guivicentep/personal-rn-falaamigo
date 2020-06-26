import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import LoginSenior from './pages/LoginSenior';
import LoginVoluntary from './pages/LoginVoluntary';
import RetrievePassword from './pages/RetrievePassword';
import VoluntaryRegister from './pages/VoluntaryRegister';
import VoluntaryProfile from './pages/VoluntaryProfile';
import VoluntaryList from './pages/VoluntaryList';
import VoluntaryRules from './pages/VoluntaryRules';

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="LoginSenior" component={LoginSenior}/>
                <AppStack.Screen name="LoginVoluntary" component={LoginVoluntary}/>
                <AppStack.Screen name="RetrievePassword" component={RetrievePassword}/>
                <AppStack.Screen name="VoluntaryRegister" component={VoluntaryRegister}/>
                <AppStack.Screen name="VoluntaryProfile" component={VoluntaryProfile}/>
                <AppStack.Screen name="VoluntaryList" component={VoluntaryList}/>
                <AppStack.Screen name="VoluntaryRules" component={VoluntaryRules}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}