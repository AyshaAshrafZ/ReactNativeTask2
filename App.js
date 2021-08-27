import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet,Button, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
//import firebase from 'firebase';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  // const completeTask = (index) => {
  //   let itemsCopy = [...taskItems];
  //   itemsCopy.splice(index, 1);
  //   setTaskItems(itemsCopy)
  // }


return (
  <View style={styles.container}>
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >
    {/* Today's Tasks */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Todo List</Text>
      <View style={styles.items}>
        {/* This is where the tasks will go! */}
        { taskItems.map((item, index) => {
            return (
              <View>
                <Task text={item} /> 
              </View>
            )
          })
        }
      </View>
    </View>
      
    </ScrollView>

    {/* Write a task */}
    {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
    <KeyboardAvoidingView style={styles.writeTaskWrapper}>
      <TextInput style={styles.input2} placeholder={'Add new task'} value={task} onChangeText={text => setTask(text)} />      
    </KeyboardAvoidingView>
    <View  >
    <TouchableOpacity onPress={() => handleAddTask()}>
        {/* <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View> */}
        <Button style={styles.input2}
        title="ADD"
        color="#0000ff"
        onPress={() => handleAddTask()}
      />
      </TouchableOpacity>
      </View>
    
  </View>
);

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#0000ff',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 50,
  },
  addWrapper: {
    width: 80,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  input2: {
    width:300,
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
  }
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },input: {
//     height: 40,
//     width:200,
//     fontSize:20,
//     marginBottom :10,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

