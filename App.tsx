import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from './screens/HistoryScreen';
import GenreScreen from './screens/GenreScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

interface Book {
  id: number;
  title: string;
  // Add other book details as needed
}

const App: React.FC = () => {
  const [ome, setHome] = useState<Book[]>([]);
  const [history, setHistory] = useState<Book[]>([]);
  const [genres, setGenres] = useState<Book[]>([]);

  useEffect(() => {
    // Fetch and set book data using BookService
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={() => <HistoryScreen history={history} />} />
        <Tab.Screen name="Genre" component={() => <GenreScreen genres={genres} />} />
        <Tab.Screen name="Home" component={() => <HomeScreen home={home} />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
