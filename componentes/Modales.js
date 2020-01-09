import React, { useState } from 'react';
import { StyleSheet, Modal, Button, View } from 'react-native';

export default () => {
  const [visible, setVisible] = useState(false);
  const handlePress = () => setVisible(!visible);

  return (
    <View style={[styles.container, styles.cyan]}>
      <Modal transparent={true} animationType='slide' visible={visible} >
        <View style={[styles.container, styles.gray,styles.margin]}>
          <Button title='Cerrar Modal' onPress={handlePress} />
        </View>
      </Modal>
      <Button title='Abrir Modal' onPress={handlePress} />
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
  gray: {
    backgroundColor: 'gray',
  },
  margin: {
    margin: 55
  },
});
