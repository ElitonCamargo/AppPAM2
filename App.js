import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';

import imgBart from './assets/Bart_Simpson_200px.png';
import imgHomer from './assets/homer-simpson.png';

export default function App () {
  return (
    <View style={meusStilos.container}>
      <Image
        source={ imgBart }
        style={ meusStilos.imagens }
      />
    </View>
  )
}
const meusStilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00fdf1cc'    
  },
  imagens: {

  }
});



















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';


// export default function App() {
//   return (
//     <View style={styles.container}>      
//       <Text>Projeto</Text>
//       <Image
//         source={{uri:'https://avatars.githubusercontent.com/u/18017848?v=4'}}
//         style={styles.img}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#253a44',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#fff'
//   },
//   titulo:{
//     backgroundColor: 'red',
//     alignItems: 'center',
//     fontSize: 30,
//     color: 'blue',
//     height: 80,
//     justifyContent: 'flex-start',
//     width: 200,
//   },
//   img:{
//     width: 300,
//     height: 300,
//     borderStyle: 'double',
//     borderWidth: 15,
//     borderTopColor: '#fff',
//     borderLeftColor: '#ffc',
//     borderBottomColor: '#ff0',
//     borderRightColor: '#ffc',
//     borderBottomWidth: 3,
//     borderTopRightRadius: 0,
//     borderRadius: 150,
//     margin: 10
//   }
// });


// import { StatusBar } from 'expo-status-bar';
// import { View, Text, Image, StyleSheet } from 'react-native';

// export default function App () {
//   return (
//     <View style={ estilos.container }>
//       <View style={ estilos.card }>
//         <Text style={ estilos.titulo }>Mobile Developer</Text>
//         <Text style={ estilos.texto }>Michonne Hawthorne</Text>
//         <Image style={ estilos.img } source={ {uri:'https://avatars.githubusercontent.com/u/18017848?v=4'} }/>
//       </View>

//       <View style={ estilos.card }>
//         <Text style={ estilos.titulo }>Backend Developer</Text>
//         <Text style={ estilos.texto }>Elijah Price / Mr Glass</Text>
//         <Image style={ estilos.img } source={ {uri:'https://avatars.githubusercontent.com/u/18017848?v=4'} }/>
//       </View>

//       <View style={ estilos.card }>
//         <Text style={ estilos.titulo }>Full Stack Developer</Text>
//         <Text style={ estilos.texto }>Chuck Norris</Text>
//         <Image style={ estilos.img } source={ {uri:'https://avatars.githubusercontent.com/u/18017848?v=4'} }/>
//       </View>
//     </View>
//   )
// }

// const estilos = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor: '#dbe9f8'
//   },
//   card: {
//     backgroundColor: '#5450d6',
//     width: 300,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: '#2d1f76',
//     paddingVertical: 15,
//     paddingHorizontal: 25,
//     marginBottom: 20
//   },
//   titulo: {
//     color: '#fff',
//     fontSize:18
//   },
//   texto: {
//     color: '#a7abff',
//     marginBottom: 10,
//   },
//   img: {
//     width: 50,
//     height: 50,
//     borderRadius: 75,
//     borderColor: '#fff',
//     borderWidth: 2
//   },
// });