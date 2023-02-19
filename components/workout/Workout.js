import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable, Button } from 'react-native';
import pullWorkout from 'workout-routine/workouts/pull.js';

const Workout = props => {
    const [workoutProgram, setWorkoutProgram] = useState(pullWorkout);

    const onPress = (id) => {
        const nextWorkoutProgram = workoutProgram.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    finished: !item.finished,
                };
            } else {
                return item;
            }
        });
        setWorkoutProgram(nextWorkoutProgram);
    }

    return (
        <ScrollView style={styles.scrollView}>
            <Button
                title="Go to Creator"
                onPress={() => props.navigation.navigate('Create')}
            />
            {
                workoutProgram.map((item) => {
                    return <Pressable style={[styles.container, item.finished ? styles.finished : styles.notFinished]} key={Date.now() + Math.random()} onPress={() => onPress(item.id)}>
                        <Text style={styles.title}>{item.exerciseTitle}</Text>
                        <Text style={styles.description}>{item.exerciseDescription}</Text>
                        <Text style={styles.reps}>{item.exerciseReps}</Text>
                        <Text style={styles.status}>{item.finished ? "DONE" : "NOT DONE"}</Text>
                    </Pressable>
                })
            }
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "000",
        borderRadius: 25,
        padding: 20
    },
    finished: {
        backgroundColor: "green"
    },
    notFinished: {
        backgroundColor: "gray"
    },
    title: {
        color: '000',
        fontWeight: 'bold',
        fontSize: 30,
    },
    description: {
        color: '000',
        fontSize: 20,
    },
    reps: {
        color: '000',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
    },
    status: {
        marginTop: 10,
        color: '000',
        fontWeight: 'bold',
        fontSize: 25,
    },
    scrollView: {
    }
});

export default Workout;