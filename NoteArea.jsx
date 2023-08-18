import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function NoteArea({ onAdd }) {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleInputRef = useRef();

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    if (title === '' || content === '') {
      Alert.alert('Error', 'Empty note cannot be created');
      return;
    }
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={titleInputRef}
        style={styles.input}
        value={title}
        placeholder='Title'
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.textarea}
        value={content}
        multiline
        placeholder='type note here'
        onChangeText={setContent}
      />
      <TouchableOpacity style={styles.plusButton} onPress={handleSubmit}>
    <MaterialIcons name="add" size={35} color="#fff" />
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#555555',
    width: 350,
    margin: 20,
    shadowColor: "#646161",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 10,
    elevation: 10,
  },
  input: {
    color:'#fff',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    margin: 15,
    padding: 15,
    backgroundColor:'#555555',
  },
  textarea: {
    color:'#fff',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    margin: 15,
    padding: 15,
    backgroundColor:'#555555',
  },
  plusButton: {
    position: 'absolute',
    right: 18,
    bottom: -15,
    backgroundColor: "rgb(255, 200, 18)",
    borderRadius: 18,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#aaa",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
});

export default NoteArea;
