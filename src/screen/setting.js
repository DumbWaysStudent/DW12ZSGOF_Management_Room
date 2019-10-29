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
      <Container style={{backgroundColor:''}}>
        <Header style={{alignItems:'center', backgroundColor:'white'}}><Text style={styles.header}>SETTING</Text></Header>
        <View style={styles.content}>
                <View style={styles.User}>
                  <Icon name='contact' style={{fontSize:100, color:'#3fc380'}}></Icon>
                  <Text style={styles.YourName}>{dataLogin.user.username}</Text>
                </View>  
            <View>        
            <Card>
              <CardItem>
                <Body style={{alignItems:'center'}}>
                  <View style={styles.menu2}>
                  <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.Text}>Log Out</Text>
                  </View>
              </Body>
            </CardItem>
            </Card>
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
    margin: 10,
    paddingBottom: 50
  },
  YourName : {
    fontSize: 25,
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

