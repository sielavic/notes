import React, { useState } from 'react'
import { View, StyleSheet, Image, TextInput, ImageBackground, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const saveHandler = () => {
    if (title.trim().length < 3)
    
    {
      Alert.alert(
        'Ошибка!',
        `Минимальная длинна названия 3 символа. Сейчас ${title.trim().length} символов.`
      )
    }  else {
      onSave(title)
    }
  }

  const cancelHandler = () => {
    setTitle(value)
    onCancel()
  }

  return (
    
    
    <Modal visible={visible} animationType='slide' transparent={false}>
  
  

  
  <ImageBackground source={require('../../assets/no-items.png')} style={styles.image2}>
      <View style={styles.wrap}>
      
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder='Введите название...'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={464}
          multiline
        numberOfLines={1}
        />


        

      </View>



      <View style={styles.buttons}>
          <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>Сохранить</AppButton>
        </View>

      </ImageBackground>
    </Modal>
    
   
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 90,
    
  },
  input: {
    marginTop: 100,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '100%',
    opacity:0.7
    
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  image2:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
    
  }
})
