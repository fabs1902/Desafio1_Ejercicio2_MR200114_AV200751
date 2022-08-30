import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, SafeAreaView, FlatList, Image } from 'react-native';
import React, {Component} from 'react';

export default function App() {
  const renderItem = ({ item }) => (
    <Item  title={item.title} desc={item.desc}  img={item.src} />
  );
  return (
    <View style={styles.container}>
    <View style={{backgroundColor: "#432355", height: "12%", width: "100%", justifyContent:'center', alignItems:'left'}}>
      <Text style={{fontSize: "22", marginLeft: "6%", marginTop:"6%", color: "white"}}>Espacio</Text>
    </View>
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
    </SafeAreaView>
    
    </View>
    
  );
}
const DATA = [
  {
    id: '1',
    title: 'Mercurio',
    desc: 'Planeta más próximo al Sol',
    src:require('./src/img/mercurio.jpg')
  },
  {
    id: '2',
    title: 'Venus',
    desc: 'Segundo planeta más próximo al Sol',
    src:require('./src/img/venus.jpg')
  },
  {
    id: '3',
    title: 'La Tierra',
    desc: 'Tercer planeta más próximo al Sol',
    src:require('./src/img/tierra.jpg')
  },
  {
    id: '4',
    title: 'Estación Espacial Internacional',
    desc: 'Estación espacial situada en la órbita terrestre baja',
    src:require('./src/img/estacio.jpg')
    
  },
  {
    id: '5',
    title: 'Luna',
    desc: 'El único satélite natural de la Tierra',
    src:require('./src/img/luna.jpg')
    
  },
  {
    id: '6',
    title: 'Marte',
    desc: 'Cuarto planeta más próximo al Sol',
    src:require('./src/img/marte.jpg')
    
  },
  {
    id: '7',
    title: 'Ceres',
    desc: 'Planeta enano situado entre Marte y Júpiter',
    src:require('./src/img/ceres.jpg')
    
  },
  {
    id: '8',
    title: 'Ío',
    desc: 'El más interior de los cuatro satélites galileanos de Júpiter',
    src:require('./src/img/io.jpg')
  },
  {
    id: '9',
    title: 'Europa',
    desc: 'El más pequeño de los cuatro satélites galileanos de Júpiter',
    src:require('./src/img/europa.jpg')
    
  }
];

const Item = ({title, img, desc}) =>(
  <View style={styles.item}>
  <View style={styles.contenedorimg}>
      <Image style={styles.img} source={img} />
    </View>
    <View style={styles.contenedortxt}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    
  },
  desc: {
    fontSize: 13,
    color: '#808080',
    textAlign: 'left',
    
  },
  item: {
      backgroundColor: 'white',
      padding: 15,
      marginTop: 3,
      //marginHorizontal: 16,
      //alignItems:'center'
      flexDirection:'row'
      
      
    },
    img:{
      //borderWidth:2,
      //borderColor:'#d35647',
      resizeMode:'contain',
      margin:0,
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      borderWidth: 3,
      paddingBottom: 7
    },
    contenedortxt : {
      width: '80%',
      //backgroundColor: 'blue'
    },
    contenedorimg:
    {
      width: '20%',
      //backgroundColor: 'red'
    }

});
