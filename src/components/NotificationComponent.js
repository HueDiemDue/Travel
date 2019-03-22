import React, { Component } from 'react'
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation';

export default class NotificationComponent extends Component {

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
      <View>

      </View>
    )
  }
}