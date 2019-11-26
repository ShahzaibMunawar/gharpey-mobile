import React from "React";
import { TextInput, View, Text, ActivityIndicator } from "react-native";

const Spinner = ({size}) => {
  const {
  } = styles;
  return (
   <View style={styles.spinnerstyle}>
      <ActivityIndicator size={size||'large'}/>
   </View>
  );
};

const styles = {
  spinnerstyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
