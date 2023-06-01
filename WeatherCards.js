import WeatherCard from "./WeatherCard";
import { View,StyleSheet} from "react-native";
const WeatherCards= ({weather})=>{  
  return <View style={styles.rowCards}>
    <WeatherCard  weatherProperty='Humidity' weatherPropVal={weather.humidity}  iconName='md-water' iconFamilyName='Ionicons'/>
    <WeatherCard  weatherProperty='feels like' weatherPropVal={weather.feelsLike} iconName='wind'    iconFamilyName='FontAwesome5'/>
    <WeatherCard  weatherProperty='Minimum temperature' weatherPropVal={weather.tempMin} iconName='temperature-low'    iconFamilyName='FontAwesome5'/>
    <WeatherCard  weatherProperty='Maximum temperature' weatherPropVal={weather.tempMax} iconName='temperature-high'    iconFamilyName='FontAwesome5'/>
    <WeatherCard  weatherProperty='Air pressure' weatherPropVal={weather.pressure} iconName='air'    iconFamilyName='Entypo'/>
    <WeatherCard  weatherProperty='Sea level' weatherPropVal={weather.seaLevel} iconName='water'    iconFamilyName='FontAwesome5'/>
    <WeatherCard  weatherProperty='Wind speed' weatherPropVal={weather.windSpeed} iconName='wind'    iconFamilyName='FontAwesome5'/>
    <WeatherCard  weatherProperty='Ground level' weatherPropVal={weather.groundLevel} iconName='mountain'    iconFamilyName='FontAwesome5'/>
 </View>
}
const styles=StyleSheet.create({
  rowCards:{
   flexGrow:1,
   flexDirection:'row',
   gap:10,
   flexWrap:'wrap',
   backgroundColor:'#363535'
  }
});
export default WeatherCards;