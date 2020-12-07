import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default class Paper extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent Paper </Text>
                <Button onPress={() => console.log('pressed')}>Press me</Button>
            </View>
        )
    }
}
