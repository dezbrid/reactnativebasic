import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Button } from 'react-native-elements';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera';

export default () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {

        permisoCamara()
    }, []);
    const permisoCamara = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');

    };
    const handleFlip = () => {
        const { Type } = Camera.Constants;
        let typeP = Type.back === type ? Type.front : Type.back;
        setType(typeP)
    };
    const handlePicture = async () => {
        let photo = await camera.takePictureAsync({ base64: true });
        console.log('foto base 64 ', photo);
    }

    if (hasPermission === null) {
        return <View />;
    };
    if (hasPermission === false) {
        return  <View><Text>Dame permisos!!! </Text> </View >;
    };

    return (

        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => { camera = ref }} >
                <View style={styles.viewCamera}>
                    <Button title='flip' onPress={handleFlip} />
                    <Button title='tomar foto' onPress={handlePicture} />

                </View>
            </Camera>

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
    viewCamera: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    }


});
