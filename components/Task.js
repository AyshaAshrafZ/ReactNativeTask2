import React, {useState} from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AntDesign} from '@expo/vector-icons';

const Task = (props) => {

  const [disp, setDisp] = useState(false);

  return (
    <View>
  {disp? null  :
   
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View >
        <AntDesign name="delete" size={30} color="#0000ff" onPress={() => setDisp(!disp)}/>
        </View>
    </View>
  }
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;