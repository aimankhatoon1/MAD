import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ChessBoard = () => {
  const renderSquare = (x, y) => {
    const isEven = (x + y) % 2 === 0;

    return (
      <View
        key={`${x}-${y}`}
        style={[
          styles.square,
          { backgroundColor: isEven ? '#d18b47' : '#ffce9e' },
        ]}
      />
    );
  };

  const renderRankLabel = (y) => {
    return (
      <View key={`rank-${y}`} style={styles.label}>
        <Text style={styles.text}>{8 - y}</Text>
      </View>
    );
  };

  const renderFileLabel = (x) => {
    const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    return (
      <View key={`file-${x}`} style={styles.label}>
        <Text style={styles.text}>{labels[x]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        {Array.from(Array(8), (_, y) => renderRankLabel(y))}
      </View>
      <View style={styles.boardContainer}>
        {Array.from(Array(8), (_, y) =>
          Array.from(Array(8), (_, x) => renderSquare(x, y))
        )}
      </View>
      <View style={[styles.labelsContainer, styles.filesContainer]}>
        {Array.from(Array(8), (_, x) => renderFileLabel(x))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  labelsContainer: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  filesContainer: {
    height: 20,
    flexDirection: 'row',
  },
  boardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 8 * 40,
    height: 8 * 40,
  },
  square: {
    width: 40,
    height: 40,
  },
  label: {
    width: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default ChessBoard;