import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text,Header } from 'native-base';
import * as actionRooms from '../redux/actions/actionRoom'
import { connect } from 'react-redux'



function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              otherParam: 'anything you want here',
            })}>
        <View style={ ( title.order[0]  ) ? [styles.room,{backgroundColor:'#bfbfbf'}] : styles.room }>
        <Text>{title.name}</Text>
        <Text>{(title.order[0]) ? 'Sedang Digunakan'  : 'Tersedia' }</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}


class ForYou extends React.Component {

 async componentDidMount(){
 await this.props.handleCheckin()
  }

  render() {
    const checkin=this.props.checkinLocal.checkin
    console.disableYellowBox=true;
    return (
      <Container>
      <Content>

    <SafeAreaView>
      <Header style={{alignItems:'center', backgroundColor:'#03a678'}}><Text style={styles.header}>CHECKIN</Text></Header>
      <FlatList
        data={checkin}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        numColumns={3}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
        
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'white',
    padding: 2,
    marginTop: 10,
    marginHorizontal: 2,
    flexDirection:'row',
  },
  header: {
    color:'white'
  },
  room: {
    width: 112,
    height: 75,
    borderRadius:8,
    backgroundColor:'#3fc380',
    alignItems:'center',
    justifyContent:'center'
  }
});

const mapStateToProps = state => {
  return {
    checkinLocal: state.checkin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleCheckin:()=> dispatch(actionRooms.handleCheckin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForYou);

