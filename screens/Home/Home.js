import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import RangePicker from '../../components/UI/RangePicker/RangePicker';

export class Home extends Component {
    componentDidMount(){
    }
  render() {
    const {navigation}=this.props;
    return (
      <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('WhatsAppScreen');
            }}>
            <Image
              style={{width: 150, height: 150, borderRadius: 25}}
              source={require('../../assets/Home/whats-app-tools.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigation.navigate('ScoreRecorderScreen');
            }}>
            <Image
              style={{width: 150, height: 150, borderRadius: 25}}
              source={require('../../assets/Home/ScoreRecorder.png')}
            />
          </TouchableOpacity>
        </View>

        <RangePicker
          dataRange={[0, 100]}
          onChangeValue={value => {
            console.log(value);
          }}
          resetAfterSelecting={true}
          inputComponent={() => {
            return <Text>Name</Text>;
          }}
        />
      </View>
    );
  }
}

export default Home