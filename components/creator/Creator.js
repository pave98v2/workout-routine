import { StyleSheet, Text, View, Button } from 'react-native';


const Creator = props => {
    return (
        <View style={styles.container}>
            <Text>Create a workout</Text>
            <Button
                title="Go to Workout"
                onPress={() => props.navigation.navigate('Workout')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', justifyContent: 'center'
    },

});

export default Creator;