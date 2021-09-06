import React from 'react';
import {View, Text, Image} from 'react-native';
const TodoItem = ({user}) => {
  return (
    <View>
      <Image source={{uri: user.img}} />
      <Text>{user.name}</Text>
    </View>
  );
};
export default TodoItem;
