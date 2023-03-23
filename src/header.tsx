import React from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import IconButton from './icon-button';
import MenuIcon from './menu-icon';
import SortIcon from './sort-icon';
import Colors from './colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.leftAction}>
          <IconButton
            icon={<MenuIcon />}
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Text style={styles.logo}>LinkHub</Text>
        </View>
        <IconButton
          icon={<SortIcon />}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 48,
    flexDirection: 'column',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'space-between',
    height: 48,
  },
  leftAction: {flexDirection: 'row', alignItems: 'center'},
  logo: {
    // fontFamily: "'Advent Pro'",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.408,
    color: Colors.primary,
  },
});

export default Header;
