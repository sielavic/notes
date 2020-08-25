import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from '../components/ui/AppText'

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
      <AppText >{todo.title }</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
  
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    //shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    backgroundColor: 'white'
  }
})
