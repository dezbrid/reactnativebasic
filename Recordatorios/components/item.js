import React from 'react';
import { ListItem } from 'react-native-elements'
import { styles } from '../styles';
export default  ({ item }) => (
    <ListItem
      title={item.title}
      containerStyle={styles.containerListItem}
      bottomDivider={true}
    />
  )