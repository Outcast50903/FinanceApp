import {View} from 'react-native';
import React, {FC} from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({children}) => {
  return (
    <View className="bg-white rounded-xl w-full max-w-xs p-6 space-y-2">
      {children}
    </View>
  );
};

export default Card;
