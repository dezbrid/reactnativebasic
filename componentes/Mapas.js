import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';


export default () => {


    return (
        <View style={styles.container}>
            <MapView 
            style={styles.mapStyle} 
            initialRegion={{
                latitude: 3.4372201,
                longitude :-76.5224991,
                latitudeDelta:0.09,
                longitudeDelta:0.09
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        /*alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',*/
    },
    mapStyle: {
        flex:1
        /*width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,*/
    },

});
