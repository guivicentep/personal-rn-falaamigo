import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 6,

    },

    buttonClose: {
        alignItems: 'flex-end'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    headerTextBold: {
        fontWeight: 'bold',
        textAlign: 'center'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 20,
        color: '#149445',
        marginLeft: 50

    },

    description: {
        fontSize: 20,
        lineHeight: 24,
        color: '#737380',
        marginTop: 30,
        textAlign: "center"
    },

    incidentList: {
        marginTop: 32,  
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginRight: 10,
        flex: 1,
        
    },

    name: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: "center"
    },

    voluntary: {
        marginTop: 3,
        fontSize: 17,
        marginBottom: 10,
        color: '#737380',
        textAlign: "center"
    },
    interest: {
        marginTop: 3,
        fontSize: 17,
        marginBottom: 18,
        color: '#149445',
        textAlign: "center"
    },

    detailsButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#F46524',
        borderRadius: 20,
        height: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#F46524',
        fontSize: 15,
        fontWeight: 'bold'
    }
});