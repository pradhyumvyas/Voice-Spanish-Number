import React,{useState} from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import Sound from 'react-native-sound';

const SoundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),  
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = ()=>{

  const playSound = (sound)=>{
    const soundVar = new Sound(sound,Sound.MAIN_BUNDLE, (err)=>{
      if(err){
        console.log("No Sound");
      }
    });

    setTimeout(() =>{
      soundVar.play()
    },100)

    // soundVar.play();

    soundVar.release();
  }
  return(
    <ScrollView style={style.container}>
      <Image style={style.logo} source={require('./assets/logo.png')} />
      <View style={style.gridContainer}>
        {SoundList.map((sound) =>(
          <TouchableOpacity 
            key={sound}
            onPress={() =>{playSound(sound)}}
            style={style.box}
            >
            <Text style={style.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ ScrollView >
  )
}


export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1D262C",
  },
  logo:{
    alignSelf:'center',
    marginTop:15,
  },
  gridContainer:{
    flex:1,
    margin:5,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:'flex-start',
    justifyContent:'space-around',
  },
  box:{
    height:110,
    alignItems:'center',
    justifyContent:'center',
    width:"46%",
    marginVertical:6,
    backgroundColor:"#0f4c75",
    borderRadius:5,

    shadowColor:"#393e46",
    elevation:5,
    shadowRadius:4
  },
  text:{
    fontSize:50,
    color:"#ff4301",
  }
})