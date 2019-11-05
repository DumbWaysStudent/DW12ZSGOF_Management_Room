import React from 'react';
import {View, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import  Checkin from './checkin';
import  Room from './room';
import  Customer from './customer';
import  Setting from './setting';


export default createMaterialBottomTabNavigator(
    {
      Checkin: { 
        screen: Checkin,
        navigationOptions:{  
          tabBarLabel:'Checkin',  
          tabBarIcon: ({ tintColor }) => (  
              <View>
                  <StatusBar backgroundColor="#26c281" barStyle="ligh-content" />  
                  <Icon style={[{color: tintColor}]} size={10} name={'md-checkbox-outline'}/>  
              </View>) 
        }  
      },
      Room : {
        screen : Room,
        navigationOptions:{  
          tabBarLabel:'Room',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={20} name={'md-home'}/>  
              </View>) 
        }  
      },
      // Add : {
      //   screen : Add,
      //   navigationOptions:{  
      //     tabBarLabel:'Add Room',  
      //     tabBarIcon: ({ tintColor }) => (  
      //         <View>  
      //             <Icon style={[{color: tintColor,}]} size={20} name={'md-add-circle'}/>  
      //         </View>) 
      //   }  
      // },
      Customer : {
        screen : Customer,
        navigationOptions:{  
          tabBarLabel:'Customer',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={10} name={'ios-people'}/>  
              </View>) 
        }  
      },
      Setting: { 
        screen: Setting,
        navigationOptions:{  
          tabBarLabel:'Setting',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={10} name={'md-settings'}/>  
              </View>) 
        } 
      }
    },
    {
      initialRouteName: 'Room',
      activeColor: '#3fc380',
      inactiveColor: 'grey',
      barStyle: { backgroundColor: 'white' },
    }
  );