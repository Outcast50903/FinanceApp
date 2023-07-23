import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RightArrow} from '../../../../components';
import {IndicatorStackType} from '../../../../navigation';
import {useSetAtom} from 'jotai';
import {
  handleIndicatorSelectedAtom,
  handleTitleSelectedAtom,
} from '../../../../atoms';

interface IndicatorItemProps {
  item: {name: string; value: string};
}
const IndicatorItem: FC<IndicatorItemProps> = ({item: {name, value}}) => {
  const navigation = useNavigation<StackNavigationProp<IndicatorStackType>>();
  const handleIndicatorSelected = useSetAtom(handleIndicatorSelectedAtom);
  const handleTitleSelected = useSetAtom(handleTitleSelectedAtom);

  return (
    <View className="w-full flex-2 justify-between flex-row p-4 my-1 rounded-xl border-transparent  bg-white border dark:bg-gray-700 dark:text-white">
      <Pressable
        onPress={() => {
          handleIndicatorSelected(value);
          handleTitleSelected(name);
          navigation.navigate('History');
        }}
        className="w-64">
        <Text className="text-base font-bold dark:text-white">{name}</Text>
        <Text className="italic text-xs dark:text-white">
          {value.toUpperCase()}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          handleIndicatorSelected(value);
          handleTitleSelected(name);
          navigation.navigate('InfoIndicator');
        }}
        className="items-center justify-center w-10">
        <RightArrow color="#AD1818" width={20} height={20} />
      </Pressable>
    </View>
  );
};

export default IndicatorItem;
