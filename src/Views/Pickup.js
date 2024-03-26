import MapView from "react-native-maps";
import { Button, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

function Pickup({ navigation }) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const userLoctaion = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
  
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: location.coords.latitudeDelta,
      longitudeDelta: location.coords.longitudeDelta,
    })
    console.log(location.coords.latitude,location.coords.longitude);
  }; 

  function userLoctaionReset() {
    setMapRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      })
  }

  useEffect(() => {
    const newmapRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      };
setMapRegion(newmapRegion)
    userLoctaion();
  },[])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
      <Button
        title="Select A Destination"
        onPress={() => navigation.navigate("Destination")}
      />
      <Button
        title="Get Location"
        onPress={userLoctaion}
      />
      <Button
        title="Reset Location"
        onPress={userLoctaionReset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "85%",
  },
});

export default Pickup;
