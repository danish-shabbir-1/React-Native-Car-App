import { Button, View } from "react-native";

function RideHistory({navigation}) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button  title="Select A Destination" onPress={() => navigation.navigate('RideHistoryDetail')}/>
    </View>
}

export default RideHistory