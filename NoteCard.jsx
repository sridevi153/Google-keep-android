import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function NoteCard({ note, onDelete, id, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(note.title);
  const [newContent, setNewContent] = useState(note.content);


  const handleUpdate = () => {
    if (newTitle === '' || newContent === '') {
        Alert.alert('Error', 'Empty note cannot be updated');
        return;
    }
    onUpdate(note.id, newTitle, newContent); 
    setIsEditing(false);
};


  return (
    <View style={styles.noteCard}>
      {isEditing ? (
        <View>
          <TextInput 
            value={newTitle} 
            onChangeText={setNewTitle} 
            style={styles.inputTitle}
          />
          <TextInput 
            value={newContent} 
            onChangeText={setNewContent} 
            multiline 
            style={styles.textareaContent}
          />
          <TouchableOpacity onPress={handleUpdate} style={styles.saveButton}>
            <MaterialIcons name="save" size={25} />
          </TouchableOpacity>
          <MaterialIcons 
                style={{ padding: 5 }}
                name="delete"
                size={25}
                onPress={() => onDelete(note.id)}
            />
          </View>
      ) : (
        <View>
          <View>
          <Text style={styles.noteTitle}>{note.title}</Text>
          <Text style={styles.noteContent}>{note.content}</Text>
          </View>
          <View style={{display:'flex', flexDirection:'row'}}>
          <MaterialIcons 
          style={{padding:5}}
            name="edit" 
            size={25} 
            onPress={() => setIsEditing(true)} 
          />
        
        <MaterialIcons 
                style={{ padding: 5 }}
                name="delete"
                size={25}
                onPress={() => onDelete(note.id)}
            />
      </View>
      </View>
      )}
      
    </View>
  );
}


const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: '#555555',
    width: 150,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
    margin: 16,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff',
    margin:5,
  },
  noteContent: {
    flexWrap: 'wrap',
    color:'#fff',
    margin:5,
  },
  inputTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  textareaContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default NoteCard;
