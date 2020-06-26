 
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 6,

    },
    
    header:{
        alignItems: 'center'
    },

    imgLogo: {
        resizeMode: "contain", height: 220, width: 200, 
    },
    body: {
        marginTop: 40,
        alignItems: 'center'
    },  
    
    findFriendsButton: {
        backgroundColor: '#149445',
        borderRadius: 10,
        height: 100,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    findFriendsButtonText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    createVoluntary: {
        marginTop: 30
    },

    createVoluntaryText: {
        color: '#149445',
        fontSize: 16
    },

    footer: {
        alignItems: 'center'
    },

    imgFooter: {
        resizeMode: "contain", height: 400, width: 350
    }
});