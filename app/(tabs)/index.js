import React, { useState } from 'react'
import { Button, FlatList, Text, TextInput } from 'react-native'

import { StyleSheet,View ,ScrollView} from 'react-native'
const index = () => {
  const [goalsText,setgoalsText]=useState("");
  const [goals,setgoals]=useState([]);
  
  function buttoneventhandler()
  {
    setgoals((current)=>[...current,goalsText])
    // setgoalsText("")
  }
  
  return (
    // <View style={styles.container}>
    //   <Text>Hello WOrld</Text>
    
    //   <Button title="Button"/>
    // </View>
    <View style={styles.fullview}>
      <View style={styles.firstview}>
        <TextInput style={styles.firstviewTextBox} 
        id='namee'
        value={goalsText}
        onChangeText={(text)=>setgoalsText(text)} placeholder='Type Here'/>
        <Button onPress={buttoneventhandler} title='Assign'/>
      </View>
      {/* <ScrollView style={styles.secondview}>
        <Text>List of Events</Text>
       
        {goals.map((goal,i)=><Text key={i}>{goal}</Text>)}
      </ScrollView> */}

      <FlatList data={goals}
      renderItem={(itemData)=>{
        return(
          <View>
            <Text>{itemData.item}</Text>
          </View>
        )
      }}
      // keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
const styles=StyleSheet.create(
  {
    fullview:{
      padding:50,
      flex:1
    },
    firstview:
    {
      flexDirection:'row',
      
    },
    firstviewTextBox:
    {
      borderColor:'#cccccc',
      borderWidth:1,
      justifyContent:'space-between',
      alignItems:'center',
      width:'75%',
      flex:1,
      marginRight:2
    },
    secondview:
    {
      flexDirection:'column',
      flex:4
    },
    goalItem: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#f9f9f9',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
    },
  }
)

export default index