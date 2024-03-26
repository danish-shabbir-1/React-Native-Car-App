import { Button, View } from "react-native";

function Destination({navigation}) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Select A Car"  onPress={() => navigation.navigate('SelectCar')}/>
    </View>
}

export default Destination