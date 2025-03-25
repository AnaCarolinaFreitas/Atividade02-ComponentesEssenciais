import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ana Carolina Freitas</Text>
      <Image style={styles.img} source={require('./img/SpiderMan.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  img: {
    width: 200,
    height: 300,
    margin : 20,
  },
});
