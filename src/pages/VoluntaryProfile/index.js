import React  from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo2.png'
import firstPerson from '../../assets/mina2.png'
import stars from '../../assets/stars.png'


import styles from './styles'


export default function ListaVoluntarios(){

    const navigation = useNavigation();

    function navigateToLoginVoluntary (){
        navigation.navigate('LoginVoluntary');
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.buttonClose}>
            <TouchableOpacity onPress={navigateToLoginVoluntary}>
                <Feather name="x-circle" size={28} color="#FF0000" />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.imgTopo}/>
                <Text style={styles.title}>{'Bem vinda,\n'} <Text style={styles.headerTextBold}> {'Juliana!'}</Text></Text>
            </View>
            <View style={styles.body}> 
                <Text style={styles.description}>Nivel de amizade com os usuários:  </Text>
                <Image source={stars} style={styles.imgStars}></Image> 
                
                <Image source={firstPerson} style={styles.imgPerson}></Image> 
                <Text style={styles.allTexts}>Voluntária</Text>
                <Text style={styles.allTexts}>Juliana Veiga</Text>
                <Text style={styles.allTexts}>18/04/2002</Text>
                <Text style={styles.allTexts}>130.921.854-92</Text>
                <Text style={styles.allTexts}>Osasco - SP</Text>
                <TouchableOpacity style={styles.findFriendsButton} 
                    onPress={() => {}}>
                        <Text style={styles.findFriendsButtonText}>Editar assuntos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.findFriendsButton2} 
                    onPress={() => {}}>
                        <Text style={styles.findFriendsButtonText2}>Editar dados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.findFriendsButton3} 
                    onPress={() => {}}>
                        <Text style={styles.findFriendsButtonText3}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    );

}
