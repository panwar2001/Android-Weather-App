import React from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import IconFamily from './IconFamily';
const WeatherCard=({weatherProperty,weatherPropVal,iconName,iconFamilyName})=>{
return <View style={styles.container}>
<IconFamily iconName={iconName} iconFamilyName={iconFamilyName}/>
<Text style={styles.about}>
    {weatherProperty}
</Text>
<Text style={styles.value}>
    {weatherPropVal}
</Text>   
</View>
}
const styles=StyleSheet.create({
container:{
  height:170,
  width:170,
  backgroundColor:'black',
  borderRadius:20,
  opacity:0.7,
  fontWeight:'bold',
  margin:2
},
value:{
color:'white',
fontWeight:'bold',
fontSize:30,  
alignItems:'center',
justifyContent:'center',
textAlign:'center'
}
,about:{
    color:'lightgrey',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
}
})
export default WeatherCard;