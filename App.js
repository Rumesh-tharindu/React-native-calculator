import React,{useState} from 'react'
import {View,Text,StyleSheet,StatusBar, Button} from 'react-native'
import Colors from './src/utils/colors'
import Display from './src/components/Display'
import Buttons from './src/components/Buttons'
function App() {
  const [display,handleDisplay]=useState('hi')
  const [result,handleResult]=useState('hi')
  return (
  
      <View style={styles.container}>
       <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = {Colors.dark} translucent = {true} />
       <Display display={display} />
       <Buttons />
      </View>
    
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.darker,
    justifyContent:"center",
    alignItems:"stretch"
   
  }
})

export default App
