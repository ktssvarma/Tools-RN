import React, { Component } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export class RangePicker extends Component {
  state = {
    options: [],
    value: 0,
    selectedIndex: 0,
  };

  async componentDidMount() {
    const { dataRange } = this.props;
    await this.setState({
      options: Array.from(Array(dataRange[1] + 1).keys()).slice(dataRange[0]),
    });
  }

  handleOptionPress = (index) => {
    const { options } = this.state;
    const selectedOption = options[index];
    this.setState({ selectedIndex: index, value: selectedOption });
  };

  render() {
    const { options, value, selectedIndex } = this.state;

    const listOfOptions = () => {
      return options.map((item, index) => {
        const isSelected = selectedIndex === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => this.handleOptionPress(index)}
            style={[
              {
                borderRadius: 30,
                marginVertical: 2.5,
                paddingVertical: isSelected ? 10 : 5,
              },
              isSelected && {backgroundColor: '#5e79d2'},
            ]}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: isSelected ? 20 : 16,
                color: isSelected ? 'white' : '#213576',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      });
    };

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
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, width: '100%' }}
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
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                  {listOfOptions()}
              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  height: 40,
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: '#3758c6',
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}
                >
                  <Text style={{color:'white'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: '#3758c6',
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                  }}
                >
                <Text style={{color:'white'}}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{ flex: 1, width: '100%' }}
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
