import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';

const  ScreenNavigator = createStackNavigator({
    Home:Home,
    Error:Error
})

export default createAppContainer(ScreenNavigator)
