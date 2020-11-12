import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Ranking from '../screens/Ranking';


const Tab = createBottomTabNavigator();

const BottomTab = ()=>{
    return(
       <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="calendar_today" color={'#000'} size={28} />
            ),
          }}/>
        <Tab.Screen name="Ranking" component={Ranking}
        options={{
            tabBarLabel: 'Ranking',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="calendar_today" color={'#000'} size={28} />
            ),
          }}/>
       </Tab.Navigator> 
    )
}

export default BottomTab