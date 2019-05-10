import React, {Component} from "react";
import { StyleSheet, Image, View } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Home", "Chat", "Profile"];
export default class Sidebar extends Component {

  static navigationOptions = {
    title: 'Sidebar',
    header: null
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
      <Content>
        <View style={styles.sibarProfileBlock}>
          <Text>Profile</Text>
        </View>

        <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  sibarProfileBlock: {
    height: 200,
    backgroundColor: '#ea3f35'
  }
});
