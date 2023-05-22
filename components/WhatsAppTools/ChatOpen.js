import { Linking, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class ChatOpen extends Component {
    state={
        number:null
    }
    handelNavigateToWhatsApp(){
        const {number} = this.state;
        Linking.openURL(`https://wa.me/+91${number}`);
    }
  render() {
    return (
      <View style={{padding: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius: 50,
            borderWidth:2,
            borderColor:'#ACACAC'
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>+91</Text>
          </View>
          <TextInput
            style={{flex: 9}}
            placeholder="Enter Number"
            onChangeText={value => {
              this.setState({number: value});
            }}
            keyboardType='numeric'
            maxLength={10}
          />
        </View>
        <TouchableOpacity onPress={() => this.handelNavigateToWhatsApp()} style={{height:40,marginTop:30,justifyContent:'center',alignItems:'center',borderRadius:50,backgroundColor:'#1F9C56'}}>
          <Text style={{color:'white',fontSize:14,fontWeight:'500'}}>Open in WhatsApp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChatOpen