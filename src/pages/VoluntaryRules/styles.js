import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 15,

    },

    header: {
        alignItems: 'center',
        
    },

    headerTextBold: {
        fontWeight: 'bold',
        textAlign: 'center'
    },

    title: {
        fontSize: 25,
        marginBottom: 16,
        marginTop: 20,
        color: '#149445',
        marginLeft: 11,
        textAlign: 'center'

    },
    imgTopo:{
        resizeMode: "contain",
        height: 100,
        width: 80
    },

    description: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 30,
        marginTop: 30,
        textAlign: "center",
        
    },
    name: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: "center"
    },
    allTexts: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'left', 
        marginLeft: 20
    },

    findFriendsButton2: {
        backgroundColor: '#149445',
        borderRadius: 40,
        height: 50,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30, 
        marginTop: 200,
        marginBottom: 50
    },

    findFriendsButtonText2: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
});