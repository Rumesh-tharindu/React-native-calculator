import React from 'react'
import {View,Text, SafeAreaView, StyleSheet} from 'react-native'
import Colors from '../utils/colors'
function Display({display}) {
    return (
        <View style={styles.container}>
           <SafeAreaView>
               <Text>
                {display}
               </Text>
           </SafeAreaView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.dark,
        flex:1
        
    }
})
export default Display
