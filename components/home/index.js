import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
// import Sidebar from './../sibar/Sidebar';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

const RootStack = createDrawerNavigator(
  {
    Home: { screen: HomeScreen }
  }
  // {
  //   contentComponent: props => <Sidebar {...props} />
  // }
);

const HomeScreenRouter = createAppContainer(RootStack);

export default HomeScreenRouter;