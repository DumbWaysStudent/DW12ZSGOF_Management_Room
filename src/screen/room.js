import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text,Header, Form, Alert } from 'native-base';
import Modal from "react-native-modal";
import * as actionRooms from '../redux/actions/actionRoom'
import { connect } from 'react-redux'


function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              otherParam: 'anything you want here',
            })}>
        <View style={styles.room}>
        <Text style={{color:'white'}}>{title.name}</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

class Room extends React.Component { 

  constructor(props)
    {
        super(props);
        this.state = {
            active: false,
            inputValue: '',
        };
    }

  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

 async componentDidMount(){
 await this.props.handleGetRooms()
  }

   handleAddRoom = async() =>
    {
        const access_token = this.props.loginLocal.login.access_token;
        const inputValue = this.state.inputValue;
        if (inputValue !== '') {
           await this.props.addRooms(inputValue);
           await this.props.handleGetRooms();
            this.setState({
              isModalVisible: false
            })
        } else {
            Alert.alert('Warning','Field Name is Required');
        }
    };

  render() {
    const rooms=this.props.roomsLocal.rooms
    console.disableYellowBox=true;
    return (
      <Container>
      <Content>

    <SafeAreaView>
      <Header style={{alignItems:'center', backgroundColor:'white'}}><Text style={styles.header}>ROOM</Text></Header>
      <FlatList
        data={rooms}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        numColumns={3}
        keyExtractor={item => item.title}
      />
      <TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>


    <View style={{ flex: 1 }}>
        <Button style={styles.addroom} title="Show modal" onPress={this.toggleModal}><Icon name='add' style={{color:'white'}}>
        </Icon></Button>
        <Modal style={styles.modal} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
          <Label style={styles.addroomlabel}>Add Room</Label>
          <Label style={styles.roomname}>Room Name</Label>
          <View style={styles.input}>
          <Item regular>
            <Input autoCapitalize="none"
                            onChangeText={text => this.setState({inputValue: text})}
                            value={this.state.inputValue}
            />
          </Item>
          </View>
          <View style={styles.button}>
            <Button style={styles.cancel} title="Hide modal" onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </Button>
            <Button style={styles.save} title="Hide modal" onPress={() =>
                        {
                            this.handleAddRoom()
                        }}>
            <Text>Save</Text>
            </Button>
          </View>
          </View>
        </Modal>
      </View>

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
    color:'#3fc380',
    fontWeight:'bold'
  },
  input: {
    color:'#3fc380',
    fontWeight:'bold',
    margin:10
  },
  roomname: {
    marginStart:15,
  },
  addroomlabel: {
    marginStart:15,
    fontWeight:'bold',
    fontSize:30,
    marginTop:10,
    marginBottom:20
  },
  room: {
    width: 112,
    height: 75,
    borderRadius:8,
    backgroundColor:'#3fc380',
    alignItems:'center',
    justifyContent:'center'
  },
  addroom: {
    padding: 2,
    marginTop: 10,
    marginHorizontal: 3,
    height: 75,
    borderRadius:8,
    backgroundColor:'#3fc380',
    alignItems:'center',
    justifyContent:'center',
  },
  save: {
    flex:1,
    padding: 2,
    marginTop: 10,
    marginHorizontal: 3,
    height: 50,
    borderRadius:8,
    backgroundColor:'#3fc380',
    alignItems:'center',
    justifyContent:'center',
  },
  cancel: {
    flex:1,
    padding: 2,
    marginTop: 10,
    marginHorizontal: 3,
    height: 50,
    borderRadius:8,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
  button : {
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    margin:10
  },
  modal : {
    backgroundColor:'white',
    height:10
  }
});

const mapStateToProps = state => {
  return {
    roomsLocal: state.rooms,
    loginLocal: state.login,
    newRoomLocal: state.newRoom,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetRooms:()=> dispatch(actionRooms.handleGetRooms()),
    addRooms: (name, token) => dispatch(actionRooms.handleAddRooms(name, token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

