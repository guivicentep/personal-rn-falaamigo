import React from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo2.png'

import styles from './styles'

export default function  CadastroVolutario() {

    const navigation = useNavigation();
 
    function navigateToLoginVoluntary() {
        navigation.navigate('LoginVoluntary')
    }
    function navigateToVoluntaryRules() {
        navigation.navigate('VoluntaryRules')
    }

    return ( 

        <ScrollView style={styles.container}>
            <View style={styles.headerFeather}>
                <TouchableOpacity onPress={navigateToLoginVoluntary}>
                <Feather name="arrow-left" size={30} />
                </TouchableOpacity>
            </View>
          
        <View style={styles.headerLogo}>
        <Image source={logoImg} style={styles.firstImage} />
        </View>

        <View style={styles.cabecalho}>
        <Text style={styles.profile}>Seu perfil é de: funcionário ou voluntário?</Text>

        </View>

        <View style={styles.body}>
            <TextInput
            style={styles.txtName}
            underlineColorAndroid='transparent'
            placeholder='Perfil'
            />
            <TextInput
            style={styles.txtName}
            underlineColorAndroid='transparent'
            placeholder='Nome Completo'
            />
            <TextInput
            style={styles.txtName}
            underlineColorAndroid='transparent'
            placeholder='Data de nascimento'
            />
            <TextInput
            style={styles.txtName}
            underlineColorAndroid='transparent'
            placeholder='CPF'
            />
            
            <TextInput
            style={styles.txtName}
            underlineColorAndroid='transparent'
            placeholder='Cidade'
            />
            <TextInput
            style={styles.txtName}
            underlineColorAndroid='transparent'
            placeholder='Estado'
            />
            <TouchableOpacity style={styles.continueButton} 
                onPress={navigateToVoluntaryRules}>
                    <Text style={styles.continueButtonText}>Continuar</Text>
                </TouchableOpacity>
        </View>

        </ScrollView>
        );
    }