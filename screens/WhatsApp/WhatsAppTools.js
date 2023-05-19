import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ChatOpen from '../../components/WhatsAppTools/ChatOpen'

export class WhatsAppTools extends Component {
  render() {
    return (
      <View>
        <ChatOpen />
      </View>
    );
  }
}

export default WhatsAppTools