import React, {Component} from "react";
import {StyleSheet, View, Image} from "react-native";
import { Content, Text, Icon } from "native-base";
export default class Profile extends Component {
  render() {
    return (
        <View style={styles.profile}>
            <View style={styles.profileImageBox}>
              <Image style={styles.profileImage} source={require('./../../assets/ikhsan.jpg')}/>
            </View>

            <View style={styles.profileBox}>
              <Text style={styles.heading1}>Ikhsan Fauji</Text>
              <Text style={styles.heading2}>Software Developer</Text>
              
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 25}}>
                  <Icon name='star' style={styles.star}></Icon>
                </View>
                <View style={{width: 25}}>
                  <Icon name='star' style={styles.star}></Icon>
                </View>
                <View style={{width: 25}}>
                  <Icon name='star' style={styles.star}></Icon>
                </View>
                <View style={{width: 25}}>
                  <Icon name='star' style={styles.star}></Icon>
                </View>
                <View style={{width: 25}}>
                  <Icon name='star' style={styles.star}></Icon>
                </View>
              </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 0.3,
    flexDirection: 'row'
  },
  profileBox: {
    width: 300,
    height: 120,
    backgroundColor: '#db514a'
  },  
  profileImageBox: {
    width: 130,
    height: 120,
    backgroundColor: '#db514a'
  },  
  profileImage: {
    width: 80,
    height: 80,
    margin: 20,
    borderRadius: 50
  }, 
  heading1: {
    fontSize: 24,
    color: '#fff',
    marginTop: 20
  },
  heading2: {
    fontSize: 14,
    color: '#fff',
    marginTop: 3,
    fontStyle: 'italic'
  },
  star: {
    marginTop: 5,
    fontSize: 25,
    color: '#ffd800'
  }
});
