import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface HomeProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  const goToTasks = () => {
    navigation.navigate('Tasks');
  };

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Tela inicial</Text>
      <Button title="Ir para Tasks" onPress={goToTasks} />
      <Button title="Ir para Dashboard" onPress={goToDashboard} />
    </View>
  );
};

export default Home;
