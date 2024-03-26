import React from 'react';
import { Button, View } from 'react-native';

function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Take a Ride" onPress={() => navigation.navigate('Pickup')} />
      <Button title="Delivery" onPress={() => navigation.navigate('Delivery')} />
    </View>
  );
}

export default Dashboard;
