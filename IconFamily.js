import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const IconFamily=({iconName,iconFamilyName})=>{
  switch(iconFamilyName){
    case 'Ionicons' : return <Ionicons name={iconName} color={'white'}  size={50}/>;
    case 'Feather': return <Feather name={iconName} color={'white'}  size={50}/>;
    case 'FontAwesome5': return <FontAwesome5 name={iconName} color={'white'}  size={50}/>;
    case 'Entypo': return <Entypo name={iconName} color={'white'}  size={50}/>;
    default: return <></>
  }
}
export default IconFamily;