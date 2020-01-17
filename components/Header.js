import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from '../constants/colors';
import TextStyles from '../constants/textStyles';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: Colors.headerText,
    fontSize: TextStyles.headerFontSize
  }
});

export default Header;