import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

const Trips = ({ route }) => {
  const datas = route.params;
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView>
      <View style={{ minHeight: '20%', backgroundColor: '#02929a' }} />
      <View
        style={{
          position: 'absolute',
          top: '10%',
          zIndex: 10,
          backgroundColor: '#fff',
          width: '93%',
          elevation: 4,
          height: '20%',
          borderRadius: 6,
          alignSelf: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Text style={{ fontSize: 23, alignSelf: 'center' }}> Trip to {datas[1]}</Text>
        <View>
          <View style={{ flexDirection: 'row', gap: 110, alignSelf: 'center' }}>
            <Text>From</Text>
            <Text>To</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 60, alignSelf: 'center' }}>
            <Text>{datas[2]}</Text>
            <Text>{datas[3]}</Text>
          </View>
        </View>
      </View>
      <View style={{ height: '80%' }}>
        <View style={{ height: '85%', marginTop: '20%', paddingHorizontal: '2%', alignSelf: 'center' }}>
          <Text style={{ textAlign: 'center', color: '#202020', marginBottom: 10 }}>Here is your space, you can add tasks to your itinerary, and so much more!</Text>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#202020' }}>Add Tasks</Text>
          <View style={{ marginTop: 10 }}>
            <TextInput
              placeholder="Add here..."
              style={{ borderWidth: 1, borderColor: '#d4d4d4', padding: 5 }}
              value={newTask}
              onChangeText={(text) => setNewTask(text)}
            />
            <TouchableOpacity onPress={addTask}>
              <Text style={{ color: 'blue', fontSize: 18, marginTop: 10 }}>Add Task</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#202020', marginTop: 20 }}>
            To Do List
          </Text>
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => toggleComplete(index)}
                >
                  <Text style={{ color: item.completed ? 'green' : 'red', fontSize: 16 }}>
                    {item.completed ? 'Completed' : 'Not Completed'}
                  </Text>
                </TouchableOpacity>
                <Text style={{ flex: 1, marginHorizontal: 10, fontSize: 16, color: '#202020' }}>{item.text}</Text>
                <TouchableOpacity
                  onPress={() => deleteTask(index)}
                >
                  <Text style={{ color: 'red', fontSize: 16 }}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Trips;
