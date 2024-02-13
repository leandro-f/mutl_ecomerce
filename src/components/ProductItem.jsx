import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{product.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff', // Puedes ajustar esto según tu tema
    borderRadius: 10,
    elevation: 3, // Sombra para Android
    shadowOpacity: 0.3, // Sombra para iOS
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 150, // Puedes ajustar esto según tus necesidades
    borderTopLeftRadius: 10, // Asegúrate de que los bordes coincidan con el borde del card
    borderTopRightRadius: 10,
  },
  text: {
    margin: 10,
    fontSize: 18,
  },
});

export default ProductItem;
