import { Modal, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class RangePicker extends Component {
  state = {options: [], value: null};
  async componentDidMount() {
    const {dataRange} = this.props;
    await this.setState({
      options: Array.from(Array(dataRange[1] + 1).keys()).slice(dataRange[0]),
    });
  }
  render() {
    const {options, value} = this.state;
    const listOfOptions=()=>{
      return options.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              backgroundColor: '#ACACAC80',
              marginVertical: 2.5,
              paddingVertical: 5,
            }}>
            <Text style={{textAlign: 'center', fontSize: 16, color: '#213576'}}>
              {item}
            </Text>
          </View>
        );
      });
    }
    return (
      <View>
        <Text>{value}</Text>
        <Modal visible={true} transparent={true} animationType="slide">
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{flex: 1, width: '100%'}}
              onPress={() => {
                console.log('Close');
              }}
            />
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 20,
                flex: 4,
                width: '90%',
                backgroundColor: '#d6ddf3',
                borderRadius: 20,
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingTop: '70%', paddingBottom: '70%'}}>
                  {listOfOptions()}
                </View>
              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  height: 40,
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: '#5e79d2',
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: '#5e79d2',
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}>
                  <Text>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{flex: 1, width: '100%'}}
              onPress={() => {
                console.log('Close');
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default RangePicker;