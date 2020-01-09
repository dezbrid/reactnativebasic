import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default () => {


    return (
        <View style={[styles.container,styles.cyan]}>
            <Image source={require('../assets/icon.png')} />
            <Image source={{uri:'https://placekitten.com/300/300'}} style={{height:300,width:300}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cyan: {
        backgroundColor: 'cyan',
      },

});
