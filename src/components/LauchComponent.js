import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import { Navigation } from 'react-native-navigation';

export default class LaunchComponent extends Component {

  static options(passProps) {
    return {

    }
  }

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Travel</Text>
        <ActivityIndicator style={styles.activityIndicator} size='small' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  activityIndicator: {
    alignSelf: 'center'
  }
})