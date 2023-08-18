import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import NoteArea from './NoteArea';
import NoteCard from './NoteCard';
import MasonryList from '@react-native-seoul/masonry-list'

function App(props) {
  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const savedNotes = await AsyncStorage.getItem('notes');
      setNotes(savedNotes ? JSON.parse(savedNotes) : []);
    };

    fetchNotes();
  }, []);

const addNote = async (note) => {
  const id = Date.now();
  const newNote = { ...note, id };  // Each note now has its content and an ID
  const newNotes = [...notes, newNote];
  await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  setNotes(newNotes);
};


  // const deleteNote = async (id) => {
  //   const newNotes = notes.filter((note, index) => index !== id);
  //   await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  //   setNotes(newNotes);
  // };

  // const updateNote = async (id, title, content) => {
  //   const newNotes = notes.map((note, index) => {
  //     if (index === id) {
  //       return { ...note, title, content };
  //     } else {
  //       return note;
  //     }
  //   });
  //   await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  //   setNotes(newNotes);
  // };


  const deleteNote = async (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
};

const updateNote = async (noteId, title, content) => {
    const newNotes = notes.map((note) => {
        if (note.id === noteId) {
            return { ...note, title, content };
        } else {
            return note;
        }
    });
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
};


return (
  <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <Header />
      <NoteArea onAdd={addNote} />
      <MasonryList 
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <NoteCard 
                  note={item}
                  onDelete={deleteNote}
                  onUpdate={updateNote} 
              />
          )}
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
      />
  </View>
);
  
}

export default App;
