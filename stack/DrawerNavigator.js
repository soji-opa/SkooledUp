import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './Tab';
import DrawerContent from './DrawerContent'


const Drawer = createDrawerNavigator();

export const DrawerNavigator= () => {
    return (
       <Drawer.Navigator
    //    initialRouteName="Dashboard"
       drawerPosition="left" 
      drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.screen name="BottomTab" component={BottomTab}/>
       </Drawer.Navigator>
    )
}


