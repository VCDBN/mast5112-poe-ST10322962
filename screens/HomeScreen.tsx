import React, { useState } from 'react';
import {
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import HistoryScreen from './screens/HistoryScreen';
import GenreScreen from './screens/GenreScreen';

interface BookDetails {
  title: string;
  author: string;
  genre: string;
  pages: number;
}

const HomeScreen = () => {
  const [bookDetails, setBookDetails] = useState<BookDetails>({
    title: '',
    author: '',
    genre: 'Select Genre',
    pages: 0,
  });

  const [statistics, setStatistics] = useState({
    totalPagesRead: 0,
    numberOfBooks: 0,
  });

  const predefinedGenres = [
    'Select Genre',
    'Fantasy',
    'Mystery',
    'Romance',
    'Horror',
    'Fiction',
    'Non-Fiction',
  ];

  const addBook = () => {
    if (!isFormValid()) {
      return;
    }

    const newBook: BookDetails = {
      title: bookDetails.title,
      author: bookDetails.author,
      genre: bookDetails.genre,
      pages: parseInt(bookDetails.pages.toString(), 10),
    };

    setBookDetails({
      title: '',
      author: '',
      genre: 'Select Genre',
      pages: 0,
    });

    setStatistics({
      totalPagesRead: statistics.totalPagesRead + newBook.pages,
      numberOfBooks: statistics.numberOfBooks + 1,
    });

    Alert.alert('Success', 'Book added successfully');
  };

  const isFormValid = () => {
    if (
      !bookDetails.title ||
      !bookDetails.author ||
      bookDetails.genre === 'Select Genre' ||
      !bookDetails.pages
    ) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Book Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={bookDetails.title}
        onChangeText={(text) =>
          setBookDetails({ ...bookDetails, title: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={bookDetails.author}
        onChangeText={(text) =>
          setBookDetails({ ...bookDetails, author: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Pages"
        value={bookDetails.pages.toString()}
        onChangeText={(text) =>
          setBookDetails({
            ...bookDetails,
            pages: parseInt(text, 10) || 0,
          })
        }
        keyboardType="numeric"
      />
      <Button title="Add Book" onPress={addBook} />

      {bookDetails.title && (
        <View style={styles.bookDetails}>
          <Text style={styles.detailsHeading}>Last Book Details:</Text>
          <Text>Title: {bookDetails.title}</Text>
          <Text>Author: {bookDetails.author}</Text>
          <Text>Genre: {bookDetails.genre}</Text>
          <Text>Pages: {bookDetails.pages}</Text>
        </View>
      )}
      <View style={styles.statistics}>
        <Text style={styles.detailsHeading}>Reading Statistics:</Text>
        <Text>Total Number of Pages Read: {statistics.totalPagesRead}</Text>
        <Text>
          Average Number of Pages Read:{' '}
          {statistics.numberOfBooks > 0
            ? statistics.totalPagesRead / statistics.numberOfBooks
            : 0}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EFEF',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    fontSize: 18,
    borderColor: '#A1A1A1',
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFF',
  },
  bookDetails: {
    marginTop: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
  },
  statistics: {
    marginTop: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
  },
  detailsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default HomeScreen;
