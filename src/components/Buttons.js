import React from 'react'
import {View,Text, SafeAreaView,StyleSheet} from 'react-native'
import Button from './Button'
import colors from '../utils/colors'

function Buttons() {
    const numbers=[
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        [',', '0', '='],
    ]
const operations = ['C', '÷', '×', '-', '+']
    return (
       <View style={styles.container}>
           <SafeAreaView style={styles.numbers}>
               {numbers.map((row,i) =>
               <View key={i} style={styles.row}>
                {row.map(char=>
                    <Button key={char} char={char} />
                )}
               </View>
               )}
           </SafeAreaView>
           <SafeAreaView style={styles.operations}>
           {operations.map(char=>
                   <Button key={char} char={char} />
               )}
           </SafeAreaView>
          
       </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:3,
        flexDirection:"row"
        
    },
    numbers:{
        flex:3
    },
    row:{
        flex:1,
        flexDirection:'row',
        padding:10
    },
    operations: {
        flex: 1,
        backgroundColor: colors["blue-dark"]
      },
    btn:{
        color:"#fff"
    }
})

export default Buttons
