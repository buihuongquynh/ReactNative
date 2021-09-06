import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '/TodoItem.style';
const TodoItem = ({user}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: user.img}} />
      <Text>{user.name}</Text>
    </View>
  );
};
export default TodoItem;
