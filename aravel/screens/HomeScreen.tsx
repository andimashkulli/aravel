import React from 'react'
import Main from '../components/Main';
import { View } from 'react-native';

interface Home {
  navigation: any
}

const HomeScreen:React.FC<Home> = ({navigation}) => {
  return(
    <Main navigation={navigation}/>
  )
}
export default HomeScreen;