import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

interface DashboardProps {
  route: RouteProp<{params: {name: string; description: string}}, 'params'>;
}

const Dashboard: React.FC<DashboardProps> = ({route}) => {
  const {name, description} = route.params;

  const data = [{key: '1', name, description}];

  return (
    <View>
      <Text>Tela dashboard</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text>Nome: {item.name}</Text>
            <Text>Descrição: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
