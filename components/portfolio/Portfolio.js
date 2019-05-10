import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
        <Content style={{margin: 10}}>
          <Card style={{marginBottom: 10}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../../assets/ikhsan.jpg')} 
                          style={{width: 60, height: 60, margin: 20, borderRadius: 50}}/>
                <Body>
                  <Text>Simplify</Text>
                  <Text note>Mobile Application</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../../assets/portfolio.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
                <Text>11-03-2019</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={{marginBottom: 10}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../../assets/ikhsan.jpg')} 
                          style={{width: 60, height: 60, margin: 20, borderRadius: 50}}/>
                <Body>
                  <Text>Todoist</Text>
                  <Text note>Mobile Application</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../../assets/portfolio2.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
                <Text>11-03-2019</Text>
              </Right>
            </CardItem>
          </Card>

          <Card style={{marginBottom: 10}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./../../assets/ikhsan.jpg')} 
                          style={{width: 60, height: 60, margin: 20, borderRadius: 50}}/>
                <Body>
                  <Text>Cards</Text>
                  <Text note>Mobile Application</Text>
                </Body> 
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./../../assets/portfolio3.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
                <Text>11-03-2019</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
    );
  }
}