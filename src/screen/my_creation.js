import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const DATA = [
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
  'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
]

function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
        <Image source={{uri: title }}
        style={{width: 40, height: 45, borderWidth:2, borderColor:'#f3f1ef'}} />
        <View style={styles.list}>
          <Text style={{fontWeight:'bold'}} onPress={() => x.navigate('Detail')}>Judul Webtoon</Text>
              <Text>30 Episode(s)</Text>
        </View>
      </View>
    </View>
  );
}

class CreationScreen extends React.Component {
  render() {
    console.disableYellowBox=true;
    return (
      <Container style={{backgroundColor:''}}>
      <Content>
        <View style={styles.content}>     
        <View style={styles.content}>
          
        </View>

    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        </View>
        
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 8,
    marginHorizontal: 10,
    flexDirection:'row'
  },
  FavItem: {
    backgroundColor: 'white',
    marginTop: 8,
    marginHorizontal: 15

  },
  title: {
    fontSize: 32,
  },
  favorite: {
    marginTop:1,
    height:20,
    justifyContent: 'center',
    borderRadius: 1,
    backgroundColor:'#f64747'
  },
  list: {
    marginStart: 15,
  },
  ListFav: {
    textAlign:'center'
  },content: {
    flex : 1,
    margin:10
  },
});

export default CreationScreen;
