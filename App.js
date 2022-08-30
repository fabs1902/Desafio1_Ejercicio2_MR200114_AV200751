import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} desc={item.desc} img={item.src} />
  );
  return (
    <View style={styles.container}>
    <View style={{ backgroundColor:'#432355', height:'12%', width:'100%', justifyContent:'center'}}>
      <Text style={{color:'white', fontSize:'23', marginLeft:'8%', marginTop:'8%'}}>Espacio</Text>
    </View>
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}/>
    </SafeAreaView>
    </View>
  );
}

const DATA = [
  {
    id: '1',
    title: 'Mercurio',
    desc:'Planeta más próximo al Sol',
    src:require('./source/img/mercurio.jpg')
  },
  {
    id: '2',
    title: 'Venus',
    desc:'Segundo planeta más próximo al Sol',
    src:require('./source/img/venus.jpg')
  },
  {
    id: '3',
    title: 'La Tierra',
    desc:'Tercer planeta más próximo al Sol',
    src:require('./source/img/tierra.jpg')
  },
  {
    id: '4',
    title: 'Estación Espacial Internacional',
    desc:'Estación espacial situada en la órbita terrestre baja',
    src:require('./source/img/estacion.jpg')
  },
  {
    id: '5',
    title: 'Luna',
    desc:'El único satélite natural de la Tierra',
    src:require('./source/img/luna.jpg')
  },
  {
    id: '6',
    title: 'Marte',
    desc:'Cuarto planeta más próximo al Sol',
    src:require('./source/img/marte.jpg')
  },
  {
    id: '7',
    title: 'Ceres',
    desc:'Planeta enano situado entre Marte y Júpiter',
    src:require('./source/img/ceres.jpg')
  },
  {
    id: '8',
    title: 'Ío',
    desc:'El más interior de los cuatro satélites galileanos de Júpiter',
    src:require('./source/img/io.jpg')
  },
  {
    id: '9',
    title: 'Europa',
    desc:'El más pequeño de los cuatro satélites galileanos de Júpiter',
    src:require('./source/img/europa.jpg')
  },
];

const Item = ({title, img, desc}) =>(
  <View style={styles.item}>
  <View style={styles.contimg}>
      <Image style={styles.img} source={img} />
    </View>
  <View style={styles.conttxt}>
     <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{desc}</Text>
  </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    backgroundColor:'#E6E6E6'
  },
  desc: {
    color:'#808080',
    textAlign:'left',
    fontSize:13
  },
  title: {
    textAlign:'left',
    fontSize:16
  },
  img: {

  },
  conttxt: {
    width:'80%',
    //backgroundColor:'blue'
  },
  contimg: {
    width:'20%',
    //backgroundColor:'red'
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    //backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 3
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    alignItems:'center',
    flexDirection:'row',
    marginTop:3
  }
});
