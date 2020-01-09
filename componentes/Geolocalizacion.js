import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default () => {
    const [location, setLocation] = useState({ coords: {} });
    const [errorMessage, setErrorMessage] = useState(null);
    const getLocation = async () => {
        let { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            return setErrorMessage('Permisos no aceptados');
        }

        let location = await Location.getCurrentPositionAsync({});

        setLocation(location);

    }

    return (
        <View style={styles.container}>
            <Text>{location.coords.latitude}{' '}
            {location.coords.longitude}</Text>
            <Button title='Solicitar posicion' onPress={getLocation} />
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
