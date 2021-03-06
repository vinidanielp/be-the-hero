import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 13,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
        marginTop: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 12,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 15
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'  
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
}); 