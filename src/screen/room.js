import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity, StatusBar} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text,Header, Form, Alert } from 'native-base';
import Modal from "react-native-modal";
import * as actionRooms from '../redux/actions/actionRoom'
import { connect } from 'react-redux'




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
    isModalVisible: false,
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  state = {
    isModalEditVisible: false,
    roomName: '',
    roomId: '',
  };

  toggleModalEdit = () => {
    this.setState({ isModalEditVisible: !this.state.isModalEditVisible });
  };

  AddFav ( title ) {
    return (
      <View> 
        <View style={styles.item}>
        <TouchableOpacity onPress={ (title.item.name=='ADD') ? this.toggleModal  : () =>  this.setState({
          isModalEditVisible: true, roomName : title.item.name, roomId: title.item.id})}>
          <View style={styles.room}>
          {(title.item.name=='ADD') ? 
          <Icon name='add' style={{color:'white', fontSize:30}} />
          : <Image style={{height:70, width:40}} source={{uri: 'https://i.ibb.co/vHhpC3L/door.png' }}/> 
          }
          </View>
          <Text style={{color:'Black', textAlign:'center'}}>{title.item.name}</Text> 
        </TouchableOpacity>
        </View>
      </View>
    );
  }

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

    handleEditRoom = async() =>
    {
        const access_token = this.props.loginLocal.login.access_token;
        const roomName = this.state.roomName;
        const roomId = this.state.roomId;
        if (roomName !== '') {
           await this.props.editRoom(roomId, roomName);
           await this.props.handleGetRooms();
            this.setState({
              isModalEditVisible: false
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
        <View>
          <StatusBar backgroundColor="#26c281" barStyle="ligh-content" />
        </View>
      <Content>
    <SafeAreaView>
      <Header style={{alignItems:'center', backgroundColor:'#3fc380'}}><Text style={styles.header}>ROOM</Text></Header>
      <FlatList
        data={rooms}
        renderItem={( item ) => this.AddFav(item , this.props.navigation)}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

    <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#26c281" barStyle="ligh-content" />
        {/* <Button style={styles.addroom} title="Show modal" onPress={this.toggleModal}><Icon name='add' style={{color:'white'}}>
        </Icon></Button> */}
        
        {/* Modal Add */}
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
        {/* End Of Modal Add */}

        {/* Modal Edit */}
        <Modal style={styles.modal} isVisible={this.state.isModalEditVisible}>
          <View style={{ flex: 1 }}>
          <Label style={styles.addroomlabel}>Edit Room</Label>
          <Label style={styles.roomname}>Room Name</Label>
          <View style={styles.input}>
          <Item regular>
          <Input autoCapitalize="none"
                            onChangeText={text => this.setState({roomName: text})}
                            value={this.state.roomName}
            />
          </Item>
          </View>
          <View style={styles.button}>
            <Button style={styles.cancel} title="Hide modal" onPress={this.toggleModalEdit}>
              <Text>Cancel</Text>
            </Button>
            <Button style={styles.save} title="Hide modal" onPress={() =>
                        {
                            this.handleEditRoom()
                        }}>
            <Text>Save</Text>
            </Button>
          </View>
          </View>
        </Modal>
        {/* End Of Modal Edit */}

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
    color:'white',
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
    backgroundColor:'rgba(191, 191, 191, 1)',
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
    marginTop:170,
    marginBottom:170,
    alignContent:'center',
    borderRadius:10
  }
});

const mapStateToProps = state => {
  return {
    roomsLocal: state.rooms,
    loginLocal: state.login,
    newRoomLocal: state.newRoom,
    editRoomLocal: state.editRoom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetRooms:()=> dispatch(actionRooms.handleGetRooms()),
    addRooms: (name, token) => dispatch(actionRooms.handleAddRooms(name, token)),
    editRoom: (name, token) => dispatch(actionRooms.handleEditRoom(name, token))

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

