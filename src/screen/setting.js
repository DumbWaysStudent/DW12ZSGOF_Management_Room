import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text,Header, Thumbnail, Left, Card, CardItem, Body } from 'native-base';
import * as actionRooms from '../redux/actions/actionRoom'
import { connect } from 'react-redux'




class Setting extends React.Component {
  render() {
    const dataLogin = this.props.loginLocal.login
    console.disableYellowBox=true;
    return (
      <Container>
      
        <View style={{backgroundColor:'#3fc380', height:200}}>

        </View>
        <View style={styles.content}>
                <View style={styles.User}>
                <View style={{flex:10, justifyContent:'center'}}>
                  <Icon name='contact' style={{fontSize:100, color:'grey'}}></Icon>
                  <Text style={styles.YourName}>{dataLogin.user.username}</Text>
                </View>
                <View style={{flex:1}}>
                <Button style={{backgroundColor:'#3fc380', borderRadius:7}} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text>Log Out</Text>
                </Button>  
                </View> 
                </View> 
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  content: {
    flex : 1,
  },
  menu1: {
    height:20,
    justifyContent:'center',
    flexDirection:'row'
  },
  menu2: {
    justifyContent:'center',
    height:20
  },
  User: {
    alignItems: 'center',
    marginTop:-130 ,
    marginHorizontal:50,
    paddingBottom: 50,
    backgroundColor:'white',
    height:300,
    justifyContent:'center',
    borderRadius:15
  },
  YourName : {
    fontSize: 25,
    color:'grey',
    alignSelf:'center'
  },
  Text : {
    color: 'black',
    marginStart: 10,
  },
  header: {
    color:'#3fc380',
    fontWeight:'bold'
  },
})

const mapStateToProps = state => {
  return {
    roomsLocal:state.rooms,
    loginLocal:state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetRooms:()=> dispatch(actionRooms.handleGetRooms())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);

