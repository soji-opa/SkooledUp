import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Avatar, Title, Caption} from 'react-native-paper';
// import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
// import {authLogoutAsync} from '../store/actions/authAction';
// import {useDispatch, useSelector} from 'react-redux';
// import Axios from 'axios';
// import {useFocusEffect} from '@react-navigation/native';

function DrawerContent(props) {

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView style={styles.drawerContent} {...props}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View>
            <View style={styles.userInfoSection}>
              <Avatar.Image
                size={100}
                source={require('../assets/images/worker.png')}
              />
              <Title style={styles.title}>Hey!</Title>
              <Caption style={styles.caption}>Naruto</Caption>
            </View>

            <Drawer.Section style={styles.drawerSection}>
             
            </Drawer.Section>
          </View>
        </ScrollView>
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 40,
  },
  title: {
    marginTop: 20,
    fontSize: 14,
    color: '#000000',
    fontWeight: 'normal',
    fontFamily: 'Gotham',
    fontStyle: 'normal',
  },
  caption: {
    marginTop: 5,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Gotham',
    fontStyle: 'normal',
  },
  drawerSection: {
    marginTop: 10,
  },

  contactUsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingLeft: 15,
  },

  lastChild: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingLeft: 15,
  },

  drawerText: {
    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 30,
    color: '#000000',
  },
});