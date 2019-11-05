import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity, Alert, StatusBar} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text,Header, Left, Picker } from 'native-base';
import * as actionRooms from '../redux/actions/actionRoom'
import * as actionCustomers from '../redux/actions/actionCustomer'
import { connect } from 'react-redux'
import Modal from "react-native-modal";
import moment from 'moment'



class ForYou extends React.Component {

  constructor(props)
  {
      super(props);
      this.state = {
          active: false,
          roomValue: '',
          roomName: '',
          customerValue: '',
          durationValue: '',
      };
  }

  onValueChange2(value)
  {
      this.setState({
          customerValue: value,
      });
  S}
  
 async componentDidMount(){
 await this.props.handleCheckin()
 await this.props.handleGetCustomers()
 await this.setState({ roomId: order.id });
  }

  state = {
    isModalVisible: false,
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };


   handleAddCheckin = async() =>
    {
        // const access_token = await AuthService.storageGet('token');
        const roomValue = this.state.roomId;
        const customerValue = this.state.customerValue;
        const durationValue = this.state.durationValue;
        console.log(roomValue, customerValue, durationValue)
        if (roomValue !== '' && customerValue !== '' && durationValue !== '')
        {
            await this.props.addCheckin(roomValue, customerValue, durationValue);
            await this.props.handleCheckin();
            this.setState({
              isModalVisible: false
            })
        } else
        {
          Alert.alert('Warning', 'Field is Required');
        }
    };


 AddFav( title ) {
    return (
      <View> 
        <View style={styles.item}>
        <TouchableOpacity onPress={() =>  this.setState({
          isModalVisible: true, roomName : title.item.name, roomId: title.item.id})}>
          {(title.item.name=='ADD') ? <Text></Text> : 
          <View style={ ( title.item.order[0]  ) ? [styles.room,{backgroundColor:'#bfbfbf'}] : styles.room }>
          <Text>{title.item.name}</Text>
          <Text>{(title.item.order[0]) ? moment(title.item.order[0].order_end_time).endOf('hour').fromNow() : 'Available' }</Text>
          </View>
        }
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  


  render() {
    const checkin=this.props.checkinLocal.checkin
    console.disableYellowBox=true;
    <View>
          <StatusBar backgroundColor="#26c281" barStyle="ligh-content" />
        </View>
    
    console.log(this.state.customerValue);
    console.log(this.state.roomId);
    console.log(this.state.durationValue);
    return (
      <Container>
      <Content>
    <SafeAreaView>
    <Header style={{alignItems:'center', backgroundColor:'white'}}><Text style={styles.header}>CHECKIN</Text></Header>
      <FlatList
        data={checkin}
        renderItem={(item) => this.AddFav(item)}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>  

      {/* Modal Add Checkin */}
      <Modal style={styles.modal} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
          <Label style={styles.addroomlabel}>Checkin</Label>
            <Label style={styles.roomname}>Room Name</Label>
              <View style={styles.input}>
              <Item regular>
                <Input disabled autoCapitalize="none"
                            value={this.state.roomName}
                />
              </Item>
            </View>
            <View style={{flexDirection:'row'}}>
            <Left>
            <Label style={styles.roomname}>Customer</Label>
            </Left>
            <Right>
            <Label style={styles.roomname, {marginRight:10, color:'#3fc380'}}>Add <Icon name='add' style={{fontSize:20, color:'#3fc380'}}></Icon></Label>
            </Right>
            </View>
              <View style={styles.input}>
              <Item Picker>
              <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select Customers"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.customerValue}
              onValueChange={itemValue => this.onValueChange2(itemValue)}
               >
              {
                  this.props.customersLocal.customers.map((item) =>
                  {
                      return (
                          <Picker.Item label={item.name} value={item.id} key={item.id} />
                      )
                  })
              }
          </Picker>
          </Item>
            </View>
            <Label style={styles.roomname}>Duration</Label>
              <View style={styles.input}>
              <Item regular>
                <Input
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ durationValue: text })}
                    value={this.state.durationValue}
                />
              </Item>
            </View>
          <View style={styles.button}>
            <Button style={styles.cancel} title="Hide modal" onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </Button>
            <Button style={styles.save} title="Hide modal" onPress={() =>
                        {
                            this.handleAddCheckin()
                        }}>
            <Text>Checkin</Text>
            </Button>
          </View>
          </View>
        </Modal>
        {/* End Of Modal Checkin */}
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
  room: {
    width: 112,
    height: 75,
    borderRadius:8,
    backgroundColor:'#3fc380',
    alignItems:'center',
    justifyContent:'center'
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
    marginTop:50,
    marginBottom:50,
    borderRadius:10
  }
});

const mapStateToProps = state => {
  return {
    customersLocal: state.customers,
    checkinLocal: state.checkin,
    addCheckinLocal: state.addCheckin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetCustomers:()=> dispatch(actionCustomers.handleGetCustomers()),
    handleCheckin:()=> dispatch(actionRooms.handleCheckin()),
    addCheckin: (room_id, customer_id, duration) => dispatch(actionRooms.handleAddCheckin(room_id, customer_id, duration)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForYou);

