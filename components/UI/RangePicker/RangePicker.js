import React, {Component, createRef} from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';

export class RangePicker extends Component {
  state = {
    modalVisible: false,
    options: [],
    value: 0,
    selectedIndex: 0,
    emittedValue: 0,
  };

  scrollViewRef = createRef();

  async componentDidMount() {
    const {dataRange} = this.props;
    await this.setState({
      options: Array.from(Array(dataRange[1] + 1).keys()).slice(dataRange[0]),
    });
  }

  handleOptionPress = index => {
    const {options} = this.state;
    const selectedOption = options[index];
    this.setState({selectedIndex: index, value: selectedOption}, () => {
      this.scrollToSelectedIndex();
    });
  };

  scrollToSelectedIndex = () => {
    const {selectedIndex} = this.state;
    const scrollView = this.scrollViewRef.current;
    const itemHeight = 40;
    const offset = selectedIndex * itemHeight;
    scrollView.scrollTo({y: offset, animated: true});
  };
  async handelCloseModal() {
    const {onChangeValue, resetAfterSelecting} = this.props;
    const {value} = this.state;
    await this.setState({emittedValue: value});
    await onChangeValue(value);
    if (resetAfterSelecting) {
      this.setState({value: 0, selectedIndex: 0, modalVisible: false});
    } else {
      this.setState({modalVisible: false});
    }
  }

  render() {
    const {options, value, selectedIndex, modalVisible, emittedValue} =
      this.state;
const {inputComponent} = this.props;
    const listOfOptions = () => {
      return options.map((item, index) => {
        const isSelected = selectedIndex === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => this.handleOptionPress(index)}
            style={[
              {
                borderTopLeftRadius: 40,
                borderBottomRightRadius: 40,
                marginVertical: 2.5,
                paddingVertical: isSelected ? 10 : 5,
              },
              isSelected && {backgroundColor: '#5e79d2'},
            ]}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: isSelected ? 20 : 16,
                color: isSelected ? 'white' : '#21357680',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      });
    };

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          {inputComponent()}
        </TouchableOpacity>
        <Modal visible={modalVisible} transparent={true} animationType="slide">
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
                this.handelCloseModal();
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
              <ScrollView
                ref={this.scrollViewRef}
                showsVerticalScrollIndicator={false}>
                <View style={{paddingTop: '70%', paddingBottom: '70%'}}>
                  {listOfOptions()}
                </View>
              </ScrollView>
            </View>
            <TouchableOpacity
              style={{flex: 1, width: '100%'}}
              onPress={() => {
                this.handelCloseModal();
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default RangePicker;
