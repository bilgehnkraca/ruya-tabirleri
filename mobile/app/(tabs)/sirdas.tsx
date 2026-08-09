import React from 'react';
import { View } from 'react-native';

// Bu sayfa hiçbir zaman render edilmeyecek. 
// _layout.tsx içerisindeki tabPress listener, buraya tıklanınca 
// doğrudan /ai-assistant modalını açacak.
export default function SirdasDummyScreen() {
  return <View />;
}
