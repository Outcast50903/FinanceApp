import React from 'react';
import {Text, View} from 'react-native';

import useQueryFact from '../../api/hooks/Fact';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStack} from '../../navigation/types';
import {Button, Card, Container} from '../../components';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStack>>();
  const {factQuery} = useQueryFact();

  return (
    <Container>
      <View className="text-justify flex-1">
        <Text className="text-2xl text-center mb-2 dark:text-white">
          React-Native Template
        </Text>
        <Card>
          <Text className="text-lg">
            This is a template for React-Native projects using TypeScript,
            TailwindCSS, and React-Navigation.
          </Text>
          <Text className="mt-3 text-lg">
            It also includes TanStack Query for handle API calls. See more
            details of the libraries here
          </Text>
          <Button
            onPress={() => navigation.navigate('Details')}
            text="Go to Details"
            custom={{
              text: 'text-white',
              background: 'bg-blue-500',
              activeBackground: 'bg-blue-700',
            }}
          />
          <Text className="text-slate-900 text-sm font-thin text-center mt-3">
            {factQuery.data?.fact}
          </Text>
        </Card>
      </View>
    </Container>
  );
};

export default HomeScreen;
