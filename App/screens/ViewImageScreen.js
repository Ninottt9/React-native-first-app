import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.closeIcon}></View>
                <View style={styles.deleteIcon}></View>
            </View>
            <Image resizeMode='contain' source={require('../assets/chair.jpg')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        left: 30,
        backgroundColor: '#fc5c65',
        width: 50,
        height: 50,
        position: 'absolute', //for the elements to position absolutely
        top: 40,
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    deleteIcon: {
        right: 30,
        backgroundColor: "#4ecdc4",
        width: 50,
        height: 50,
        position: 'absolute', //for the elements to position absolutely
        top: 40,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;