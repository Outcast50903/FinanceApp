import {View, Text} from 'react-native';
import React, {FC} from 'react';

interface ItemProps {
  item: {key: string};
}

const Item: FC<ItemProps> = ({item: {key}}) => {
  return (
    <View className="mb-2">
      <Text className="text-lg">{`\u2022 ${key}`}</Text>
    </View>
  );
};

export default Item;
