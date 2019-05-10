import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Drawer, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Profile from './../profile/Profile';
import Portfolio from './../portfolio/Portfolio';
import Sidebar from './../sibar/Sidebar';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  }

  constructor(props){
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<Sidebar/>}
          onClose={() => this.closeDrawer()} >

      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent
                onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Code Pool</Title>
          </Body>
          <Right>
                
          </Right>
        </Header>

        <Profile></Profile>

        <Content>

          <Portfolio></Portfolio>

        </Content>

        <Footer>
          <FooterTab style={styles.footer}>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Portfolio</Text>
            </Button>
            <Button active vertical style={{backgroundColor: '#cc3128'}}>
              <Icon active name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </Drawer>
    );
  }
  
}

const styles = StyleSheet.create({
  header : {
    backgroundColor: '#cc3128'
  },
  footer: {
    backgroundColor: '#ea3f35'
  }
});