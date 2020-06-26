import React from 'react'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo2.png'
import firstPerson from '../../assets/mina2.png'


import styles from './styles'


export default function ListaVoluntarios(){

    const navigation = useNavigation();

    function navigateToLoginSenior (){
        navigation.navigate('LoginSenior');
    }


    return(
        <View style={styles.container}>
            <View style={styles.buttonClose}>
            <TouchableOpacity onPress={navigateToLoginSenior}>
                <Feather name="x-circle" size={28} color="#FF0000"/>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Image source={logoImg} style={{resizeMode: "contain", height: 100, width: 80}}/>
                <Text style={styles.title}>{'Bem vindo,\n'} <Text style={styles.headerTextBold}> {'Jobson!'}</Text></Text>
            </View>
            
            <Text style={styles.description}>Escolha um amigo para conversar: </Text>
            <FlatList 
            style={styles.incidentList, {flex:1, marginTop: 40, removeClippedSubviews: true}}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            
            renderItem={() => (
                <View style={styles.incident}>
                  <Image source={firstPerson} style={{ height: 90, width: 60, marginLeft: 30}}></Image> 

                  <Text style={styles.name}>Juliana, 18</Text> 
  
                  <Text style={styles.voluntary}>Voluntária</Text> 
                  <Text style={styles.interest}>{'Signos, Cinema, \n'} Cultura</Text>    

                  <TouchableOpacity style={styles.detailsButton} 
                  onPress={() => {}}>
                      <Text style={styles.detailsButtonText}>Conversar</Text>
                  </TouchableOpacity>
                </View>
            )}
            />
            
                
        </View>
        
    );

}
