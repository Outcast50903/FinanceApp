import {View, Text} from 'react-native';
import React, {FC} from 'react';
import dayjs from 'dayjs';

interface HistoryItemProps {
  date: string;
  value: string;
}

const HistoryItem: FC<HistoryItemProps> = ({date, value}) => {
  const dateFormatted = dayjs(date).format('DD/MM/YYYY');

  return (
    <View className="justify-around flex-row py-3 border-b-2 border-gray-500">
      <Text className="text-lg dark:text-white">{`${dateFormatted}`}</Text>
      <Text className="text-lg font-bold dark:text-white">{`${value}`}</Text>
    </View>
  );
};

export default HistoryItem;
