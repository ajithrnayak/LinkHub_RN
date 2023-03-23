import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface Props {
  icon: React.ReactNode;
  title?: string;
  onPress: () => void;
}

const IconButton: React.FC<Props> = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 0, // todo : should be 8 if title is not nil
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default IconButton;
