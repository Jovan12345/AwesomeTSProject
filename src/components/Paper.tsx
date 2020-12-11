import React from 'react';
import { View } from 'react-native';
import { Button, ActivityIndicator, Colors, Avatar } from 'react-native-paper';

const Paper = () => {
    return (
        <View>
            <Button onPress={() => console.log('pressed')}>Press me!</Button>
            <ActivityIndicator animating={true} color={Colors.red800} />
            <Avatar.Image size={64} source={require('../assets/anon.jpg')} />
        </View>
    )
}

export default Paper;
