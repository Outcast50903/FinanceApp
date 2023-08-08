import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSetAtom} from 'jotai';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabStackParamList} from 'navigation';
import {handleIndicatorSelectedAtom, handleTitleSelectedAtom} from 'atoms';
import {RightArrow} from 'components';

interface IndicatorItemProps {
  item: {name: string; value: string};
}

type IndicatorStackNavigationProp =
  BottomTabNavigationProp<BottomTabStackParamList>;

const IndicatorItem: FC<IndicatorItemProps> = ({item: {name, value}}) => {
  const navigation = useNavigation<IndicatorStackNavigationProp>();
  const handleIndicatorSelected = useSetAtom(handleIndicatorSelectedAtom);
  const handleTitleSelected = useSetAtom(handleTitleSelectedAtom);

  return (
    <View className="w-full flex-2 justify-between flex-row p-4 my-1 rounded-xl border-transparent  bg-white border 
      dark:bg-gray-700 dark:text-white">
      <Pressable
        onPress={() => {
          handleIndicatorSelected(value);
          handleTitleSelected(name);
          navigation.navigate('HOME_ROUTES', {screen: 'HISTORY'});
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
          navigation.navigate('HOME_ROUTES', {screen: 'INFO'});
        }}
        className="items-center justify-center w-10">
        <RightArrow color="#AD1818" width={20} height={20} />
      </Pressable>
    </View>
  );
};

export default IndicatorItem;
