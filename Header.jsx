import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Image 
        source={{ uri: 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' }} 
        style={styles.logo} 
      />
      <Text style={styles.text}>Keep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#555555',
    padding: 8,
    shadowColor: "#646161",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,  // For Android
    flexDirection: 'row',
    alignItems: 'center',  // To align items vertically in the center
  },
  logo: {
    width: 48, // Assuming the size based on the link provided.
    height: 48,
  },
  text: {
    marginLeft: 10,  // Added some margin for spacing between logo and text
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
  }
});

export default Header;
