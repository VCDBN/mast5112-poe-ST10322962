import React from 'react';
import { View, Text } from 'react-native';
import GenreScreen from './screens/GenreScreen';
import HomeScreen from './screens/HomeScreen';

interface HistoryScreenProps {
  history: Book[];
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ history }) => {
  return (
    <View>
      <Text>History Screen</Text>
      <HomeScreen = {history} />
    </View>
  );
};

export default HistoryScreen;
