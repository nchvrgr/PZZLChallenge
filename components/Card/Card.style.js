import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    title: {
        color: '#457B9D',
        fontSize: 30,
        fontFamily: 'sans-serif-thin'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    }
})