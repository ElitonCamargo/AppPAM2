import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image } from 'react-native';

import imgBart from './assets/Bart_Simpson_200px.png';
import imgHomer from './assets/homer-simpson.png';

export default function App () {
  return (
    <View style={meusStilos.container}>
      <View style={meusStilos.chat}>
        <Text style={meusStilos.nomePer}>Bart</Text>
        <Text style={meusStilos.msg}>Oi pai</Text>
        <Image
          source={ imgBart }
          style={ meusStilos.imagens }
        />

      </View>

      <View style={meusStilos.chat}>
        <Text style={meusStilos.nomePer}>Homer</Text>
        <Text style={meusStilos.msg}>Fala feio, sua mãe quer falar com você.</Text>
        <Image
          source={ imgHomer }
          style={ meusStilos.imagens }
        />

      </View>

    </View>
  )
}
const meusStilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'    
  },
  chat:{
    padding: 20,
    backgroundColor: '#000',    
    width: 350,
    borderRadius:10,
    marginBottom: 20
  },
  imagens: {
    width: 80,
    height: 80,
    borderColor: '#fff',
    borderTopWidth: 7,
    borderLeftWidth: 5,   
    borderRightWidth: 5,   
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderRadius: 125,
    borderTopColor: '#ff0',
    borderBottomColor: 'red',
    borderTopRightRadius: 0
  },
  nomePer:{
    fontSize: 30,
    color: '#FF0',
    fontWeight: 'bold',
    lineHeight: 40

  },
  msg:{
    fontSize: 20,
    color: '#FFF', 
    lineHeight: 40,
    letterSpacing: 5,
    fontStyle: 'italic',
    textAlign: 'justify'
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