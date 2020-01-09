import React, { useState,useEffect } from 'react';
import { StyleSheet, AsyncStorage, Button, View,Alert } from 'react-native';

export default () => {
    const [visible, setVisible] = useState(false);
    const handlePress = async () => {
       await AsyncStorage.setItem('dato','este es mi dato');
    };
    useEffect( ()=>{
        traerDato()
    },[]);
    const traerDato = async ()=>{
        const dato = await AsyncStorage.getItem('dato');
        Alert.alert('Dato!',dato);
    }

    return (
        <View style={[styles.container, styles.cyan]}>
 
            <Button title='Asignar valor' onPress={handlePress} />
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