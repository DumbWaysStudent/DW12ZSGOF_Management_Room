import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Container, Input, Item, Button, Icon } from 'native-base';
import * as actionAkun from '../redux/actions/actionAkun'
import { connect } from 'react-redux'


class LoginScreen extends React.Component {

  constructor()
  {
    super();
 
    this.state = { 
      hidePassword: true,
      emailValue : '',
      passwordValue : ''
    }
  }
 
  buttonEnabled= () =>
  {

  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }


  loginUser = async() => {
    const { emailValue, passwordValue } = this.state;
    await this.props.handleLogin(emailValue, passwordValue);
    if (this.props.loginLocal.login.token != ''){
          this.props.navigation.navigate('Home');
    } else {
        Alert.alert('Incorrect', 'Email atau Password salah');
    }
};

  render() {
    console.disableYellowBox=true;

    return (

      <Container style={{backgroundColor:''}}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.login}>Login</Text>
            <Text>HappyWork</Text>
          </View>
          <View>
            <Text>Email</Text>
            <Item regular style={styles.input}>
              <Input autoCapitalize='none' keyboardType='email-address' onChangeText={(text)=>{this.setState({emailValue:text})}} value={this.state.emailValue}/>
            </Item>
            <Text>Password</Text>
            <Item rounded style={styles.input}>
              <Input secureTextEntry = { this.state.hidePassword } onChangeText={(text)=>{this.setState({passwordValue:text})}} value={this.state.passwordValue}/>
              <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility }>
              <Icon name = { ( this.state.hidePassword ) ? 'eye' : 'eye-off' } />
              </TouchableOpacity>
            </Item>
            <Button disabled={(this.state.emailValue && this.state.passwordValue)=='' ? true:false}
             style={ ( this.state.emailValue && this.state.passwordValue )=='' ? styles.buttonDisabled : styles.button }
             onPress={() => this.loginUser() }>
            <Text style={{color:'white'}} > Login </Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex : 1,
    justifyContent: 'center',
    margin:40
  },
  input: {
    height: 50,
    marginBottom:15,
    borderRadius:10
  },
  button: {
    height: 50,
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:'#f64747'   
  },
  buttonDisabled: {
    height: 50,
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:'grey'   
  },
  title: {
    alignItems: 'center',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 30
  },
  login : {
    fontSize: 40,
  }
})


const mapStateToProps = state => {
  return {
      loginLocal: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      handleLogin: (email, password) => dispatch(actionAkun.handleLogin(email, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);