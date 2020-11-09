import React from 'react'
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native'
import Colors from '../utils/colors'
function Button({char}) {
    return (
      <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>{char}</Text>
      </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
  container:{
      flex:1,
     justifyContent:"center",
     alignItems:"center"
     
    
  },
  text:{
      color:Colors.white,
      fontSize:30
  }
})
export default Button
