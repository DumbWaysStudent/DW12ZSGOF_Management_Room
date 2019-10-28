import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity,} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input,Thumbnail, Text,Header, Card, Fab } from 'native-base';
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
 

 async componentDidMount(){
 await this.props.handleGetCustomers()
  }

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
          <Fab style={{backgroundColor:'#3fc380'}}><Icon name='add'/></Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: 'rgba(232, 232, 232, 0.2)',
    padding: 10,
    marginTop: 8,
    marginHorizontal: 5,
    flexDirection:'row',
    borderRadius:5,
  },
  card : {
    borderRadius:10
  },
  identity : {
    marginStart: 10,
    flexDirection: 'row'
  },
  header: {
    color:'#3fc380',
    fontWeight:'bold'
  }
});

const mapStateToProps = state => {
  return {
    customersLocal: state.customers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetCustomers:()=> dispatch(actionCustomers.handleGetCustomers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkin);

