import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class ScoreRecorder extends Component {
  state = {gamesHistory: [1,2,3]};

  render() {
    const {gamesHistory} = this.state;
    return (
      <View style={{padding: 30, backgroundColor: '#ececf3', flex: 1}}>
        <TouchableOpacity
          style={{
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#59558b',
            borderRadius: 30,
          }}>
          <Text style={{color: '#ececf3'}}>New Game</Text>
        </TouchableOpacity>
        <ScrollView>
          {gamesHistory.map((game,index) => {
            return <Text key={index}>{game}</Text>;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default ScoreRecorder