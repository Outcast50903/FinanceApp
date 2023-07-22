import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';

interface ButtonProps {
  onPress: () => void;
  text: string;
  custom?: {
    background?: string;
    text?: string;
    activeBackground?: string;
  };
}

const Button: FC<ButtonProps> = ({onPress, text, custom: styled}) => {
  return (
    <Pressable
      className={`h-12 px-4 items-center justify-center rounded-lg mt-2 ${styled?.background} active:${styled?.activeBackground}`}
      // className="h-12 px-4 items-center justify-center rounded-lg mt-2 bg-blue-500 active:bg-blue-700"
      onPress={onPress}>
      <Text className={`font-bold ${styled?.text}`} selectable={false}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
