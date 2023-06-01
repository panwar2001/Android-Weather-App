import React, { useState} from 'react';
import { Image, StyleSheet, Text, ScrollView, View,Alert} from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import WeatherCards from './WeatherCards';
const App=()=> {
  const [input,setInput]=useState('');
  const [description,setDescription]=useState('');
  const [weather,setWeather]=useState({ 
  temperature:'',
  feelsLike:'',
  tempMin:'',
  tempMax:'',
  pressure:'',
  humidity:'',
  seaLevel:'',
  groundLevel:'',
  windSpeed:'',
  name:''
});
const [isday,setIsDay]=useState(true);
  const [uri,setUri]=useState('https://openweathermap.org/img/wn/01d@2x.png');
  const handleSearch=(i)=>{
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${i}&appid=52741d2a3e78b22d22cfd32645f386de`;
    axios.get(api).then((response) => {
      setIsDay(response.data.weather[0].icon[2]==='d');
      setDescription(response.data.weather[0].description);
      setWeather({
        ...weather,
        temperature:Math.round(response.data.main.temp-273.15),
        feelsLike:Math.round(response.data.main.feels_like-273.15),
        tempMin:Math.round(response.data.main.temp_min-273.15),
        tempMax:Math.round(response.data.main.temp_max-273.15),
        pressure:response.data.main.pressure,
        humidity:response.data.main.humidity,
        seaLevel:response.data.main.sea_level,
        groundLevel:response.data.main.grnd_level,
        windSpeed:response.data.wind.speed,
        name:response.data.name
      })
      setUri(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    }).catch(()=>Alert.alert('No results...'));
    }
  
  
  return (
    <ScrollView  >
       <View style={styles.container}>
      <Image
          source={isday?require('./assets/day.jpg'):require('./assets/moon.png')}
          style={{height:200,width:'100%'}}
        />
      <SearchBar
        round
        inputStyle={{color: 'white'}}
        containerStyle={styles.SearchBar}
        placeholder="Search for city ..."
        onChangeText={(text)=>setInput(text)}
        value={input}
        maxLength={100}
        onSubmitEditing={()=>handleSearch(input.trim())}
      />
      <Image
          source={require('./assets/world.png')}
          style={styles.worldImage}
        />
        <Text style={styles.city}>{weather.name}</Text> 
        <Image
          source={{uri:uri}}
          style={styles.night}
        />
        <Text style={styles.temperature}>{weather.temperature}&deg;
           <Text style={{fontSize:20}}>{description}</Text>
        </Text>
        </View> 
        <WeatherCards weather={weather}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#363535'
  },input:{
    height:50,
 },
  worldImage:{
    position:'relative',
    width:'100%',
    height:150,
    opacity:0.5,
    resizeMode:'cover'
  },temperature:{
    fontSize:80,
    marginLeft:'10%',
    color:'white',
    fontWeight:'bold'
  },night:{
    height:100,
    width:100
  },city:{
    color:'white',
    textAlign:'center',
    fontSize:30
  },SearchBar:{
    backgroundColor: 'transparent',
     borderWidth: 1, 
     borderRadius: 5,
    }
});

export default App;