import { Button, View } from "react-native";

function Pickup({navigation}) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Select A Destination" onPress={() => navigation.navigate('Destination')}/>
    </View>
}

export default Pickup