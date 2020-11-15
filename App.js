import React,{useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './stack/Main';
import {PRIMARY_COLOR, BACKGROUND_COLOR, STATUS_BAR} from './shared/color'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
  
  },
};

const App = () => {

  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);
  return (
  
    <PaperProvider theme={theme}>
    <View style={{ flex: 1 }}>

    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={STATUS_BAR} barStyle={'light-content'} />
        <Main />
    </SafeAreaView>
    </View>
    </PaperProvider>
      
  );
};

const styles = StyleSheet.create({
  
});

export default App;
