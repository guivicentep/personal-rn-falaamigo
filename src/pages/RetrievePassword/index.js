import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import imgLogo from '../../assets/logo2.png';

import styles from './styles';

export default function RetrievePassword() {

    const navigation = useNavigation();

    function navigateToLoginVoluntary() {
        navigation.navigate('LoginVoluntary')
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={navigateToLoginVoluntary}>
                <Feather style={styles.arrow}name="arrow-left" size={40}/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Image source={imgLogo} style={styles.imgLogo}/>
            </View>      
            <View style={styles.body}>
                <Text style={styles.retrieveText}>Recuperar senha</Text>
                <TextInput style={styles.txtName}placeholder="Informe seu e-mail"/>
                <Text style={styles.emailText}>
                    Enviaremos um e-mail para você com o link para recuperação de senha.</Text>
                <TouchableOpacity style={styles.findFriendsButton} 
                onPress={navigateToLoginVoluntary}>
                    <Text style={styles.findFriendsButtonText}>Enviar e-mail</Text>
                </TouchableOpacity>
            </View> 


        </ScrollView>
    )
}