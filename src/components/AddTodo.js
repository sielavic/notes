import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Название не может быть пустым')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Введите название...'
        autoCorrect={false}
        autoCapitalize='none'
        multiline
        numberOfLines={1}
      />
      <AntDesign.Button style={styles.button} onPress={pressHandler} name='pluscircleo'>
        Добавить
      </AntDesign.Button>
      {/* <Button title='Добавить' onPress={pressHandler} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#606061'
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#606061'
    
  },
  button:{
    backgroundColor: '#606061'
  }
})
