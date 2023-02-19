import { StyleSheet, Text, View, Button } from 'react-native';


const Home = props => {
    return (
        <View style={styles.container}>
            <Text>Workout BOI</Text>
            <Button
                title="Go to Workout"
                onPress={() => props.navigation.navigate('Workout')}
            />
            <Button
                title="Go to Creator"
                onPress={() => props.navigation.navigate('Create')}
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

export default Home;