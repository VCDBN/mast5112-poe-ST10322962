import React from 'react';
import { View, Text } from 'react-native';
import HistoryScreen from './screens/HistoryScreen';
import HomeScreen from './screens/HomeScreen';

interface GenreScreenProps {
  genres: Book[];
  // Add more props as needed
}

const GenreScreen: React.FC<GenreScreenProps> = ({ genres }) => {
  return (
    <View>
      <Text>Genre Screen</Text>
      {/* Render genre-wise book counts and BookList */}
    </View>
  );
};

export default GenreScreen;
