import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => setCategorySelected(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15, // Añade un pequeño espacio vertical entre los botones
  },
  button: {
    backgroundColor: '#007bff', // Un azul estilo botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Bordes redondeados para el aspecto de botón
    width: 250, // Ancho fijo para todos los botones
    elevation: 3, // Sombra para Android
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    alignItems: 'center', // Asegura que el texto esté centrado en el botón
  },
  text: {
    color: '#ffffff', // Texto blanco para que resalte sobre el botón azul
    fontSize: 18,
    textAlign: 'center',
  },
});


export default CategoryItem;
