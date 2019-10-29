import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity,} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input,Thumbnail, Text,Header, Card, Fab } from 'native-base';
import Modal from "react-native-modal";
import * as actionCustomers from '../redux/actions/actionCustomer'
import { connect } from 'react-redux'



function AddFav( title, x ) {
  return (
    <View style={styles.card}> 
      <TouchableOpacity onPress={() => x.navigate('Detail', {
            otherParam: 'anything you want here',
            })}>
      <View style={styles.item}>
      <Thumbnail large source={{uri: title.image }}
            style={styles.image} />
      <View style={styles.identity}>
        <View>
          <Text style={{fontWeight:'bold'}}>Name</Text>
          <Text style={{fontWeight:'bold'}}>Identity Number</Text>
          <Text style={{fontWeight:'bold'}}>Phone Number</Text>
        </View>
        <View style={styles.data}>
          <Text style={{fontWeight:'bold'}}> : {title.name}</Text>
          <Text style={{fontWeight:'bold'}}> : {title.identity_number}</Text>
          <Text style={{fontWeight:'bold'}}> : {title.phone_number}</Text>
        </View>
      </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

class Checkin extends React.Component {

  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

 async componentDidMount(){
 await this.props.handleGetCustomers()
  }

  constructor(props)
  {
      super(props);
      this.state = {
          active: false,
          inputValue: '',
          identityValue: '',
          phoneValue: '',
          image: 'https://www.acurata.de/fileadmin/_processed_/f/1/csm_User_03539ade6c.png'
      };
  }


  handleAddCustomers = async () =>
  {
      const access_token = this.props.loginLocal.login.access_token;
      const inputValue = this.state.inputValue;
      const identityValue = this.state.identityValue;
      const phoneValue = this.state.phoneValue;
      const image = this.state.image;
      if (inputValue !== '' || identityValue !== '' || phoneValue !== '')
      {
          await this.props.addCustomer(inputValue, identityValue, phoneValue, image, access_token);
          await this.props.handleGetCustomers();
            this.setState({
              isModalVisible: false
            })
      } else
      {
          Alert.alert('Warning', 'Field is Required');
      }
  };
  render() {
    const customers=this.props.customersLocal.customers
    console.disableYellowBox=true;
    return (
      <Container>
      <Content>

    <SafeAreaView>
      <Header style={{alignItems:'center', backgroundColor:'white'}}><Text style={styles.header}>CUSTOMER</Text></Header>
      <FlatList
        data={customers}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
        </Content>
        <View>
          <Fab title="Show modal" onPress={this.toggleModal} style={{backgroundColor:'#3fc380'}}>
          <Icon name='add'/></Fab>
          <Modal style={styles.modal} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
          <Label style={styles.addroomlabel}>Add Customers</Label>
            <Label style={styles.roomname}>Name*</Label>
              <View style={styles.input}>
              <Item regular>
                <Input autoCapitalize="none"
                            onChangeText={text => this.setState({inputValue: text})}
                            value={this.state.inputValue}
                />
              </Item>
            </View>
            <Label style={styles.roomname}>Identity Number*</Label>
              <View style={styles.input}>
              <Item regular>
                <Input
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ identityValue: text })}
                    value={this.state.identityValue}
                />
              </Item>
            </View>
            <Label style={styles.roomname}>Phone Number*</Label>
              <View style={styles.input}>
              <Item regular>
                <Input
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ phoneValue: text })}
                    value={this.state.phoneValue}
                />
              </Item>
            </View>
            <Label style={styles.roomname}>Photo (optional)</Label>
            <View style={styles.camera}>
              <Icon name='camera'></Icon>
            </View>
          <View style={styles.button}>
            <Button style={styles.cancel} title="Hide modal" onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </Button>
            <Button style={styles.save} title="Hide modal" onPress={() =>
                        {
                            this.handleAddCustomers()
                        }}>
            <Text>Save</Text>
            </Button>
          </View>
          </View>
        </Modal>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'rgba(232, 232, 232, 1)',
    padding: 10,
    marginTop: 8,
    marginHorizontal: 5,
    flexDirection:'row',
    borderRadius:5,
    borderBottomLeftRadius:50,
    borderTopLeftRadius:50,
  },
  card : {
    borderRadius:10,
  },
  identity : {
    marginStart: 10,
    flexDirection: 'row'
  },
  header: {
    color:'#3fc380',
    fontWeight:'bold'
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
  input: {
    color:'#3fc380',
    fontWeight:'bold',
    margin:10
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
  },
  camera : {
    marginLeft:15,
    fontSize:20
  }
});

const mapStateToProps = state => {
  return {
    customersLocal: state.customers,
    loginLocal: state.login,
    newCustomerLocal: state.newCustomer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetCustomers:()=> dispatch(actionCustomers.handleGetCustomers()),
    addCustomer: (name, identity, phone, image) => dispatch(actionCustomers.handleAddCustomers(name, identity, phone, image)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkin);

