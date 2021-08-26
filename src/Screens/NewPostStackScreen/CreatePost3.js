import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import colors from '../../constants/Colors';
import images from '../../constants/Images';
import Button from './components/button';



const CreatePost3 = ({navigation}) => {

    const [checked, setChecked] = React.useState('first');

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={images.union} style={styles.img}></Image>
                    <Text style={styles.text}>Create post</Text>
                </View>
                <Image source={images.carImage} style={{ borderRadius: 40, alignSelf: 'center', width: "95%", marginTop: 20 }} />
                <View>
                    <View>
                        <Text style={[styles.textInputText, { paddingTop: 30 }]}>Select Company</Text>
                        <TextInput style={styles.textInput}>
                            <Ionicons name="chevron-down" color="#213884" size={30} style={{ marginLeft: "90%", }} /></TextInput>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Model</Text>
                        <TextInput style={styles.textInput}>
                            <Ionicons name="chevron-down" color="#213884" size={30} style={{ marginLeft: "90%", }} /></TextInput>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Category</Text>
                        <TextInput style={styles.textInput}>
                            <Ionicons name="chevron-down" color="#213884" size={30} style={{ marginLeft: "90%", }} /></TextInput>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Current Mileage</Text>
                        <TextInput style={styles.textInput}>
                             </TextInput>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Registration Number</Text>
                        <TextInput style={styles.textInput}>
                             </TextInput>
                    </View>
                </View>
                <View style={{flexDirection:'row',paddingTop:20,paddingLeft:10,justifyContent:'space-between',paddingRight:30}}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color="red"
                        uncheckedColor='red'   />
                        <Text style={{ color: '#00008b', fontSize: 20 }}> New</Text>
                        
                        <RadioButton
                        value="Second"
                        status={checked === 'Second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Second')}
                        color="red"
                        uncheckedColor='red'   />
                        <Text style={{ color: '#00008b', fontSize: 20 }}> Used</Text>
                        
                        <RadioButton
                        value="Third"
                        status={checked === 'Third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Third')}
                        color="red"
                        uncheckedColor='red'   />
                        <Text style={{ color: '#00008b', fontSize: 20 }}> Auction</Text>

                        <RadioButton
                        value="Forth"
                        status={checked === 'Forth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Forth')}
                        color="red"
                        uncheckedColor='red'                        
                        />
                        <Text style={{ color: '#00008b', fontSize: 20 }}> Rental</Text> 
                </View>
                <TouchableOpacity>
                    <Text style={styles.btn}> Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,
        fontWeight: '800'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: 20

    },
    textInputText: {
        color: colors.PrimaryBlue,
        padding: 20,
        fontSize: 15,
        paddingBottom: -15,
    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 35,
        paddingRight: 40,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginTop:60
    },






})
export default CreatePost3;

