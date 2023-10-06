import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface TasksProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Tasks: React.FC<TasksProps> = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const saveTask = () => {
    navigation.navigate('Dashboard', {name, description});
  };

  return (
    <View>
      <Text>Tela tasks</Text>
      <TextInput
        placeholder="Nome da tarefa"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Descrição da tarefa"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <Button title="Salvar" onPress={saveTask} />
    </View>
  );
};

export default Tasks;
