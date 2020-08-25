import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const AppText = props => (
  <Text numberOfLines={1} ellipsizeMode="tail" style={{ ...styles.default, ...props.style }}>{props.children}</Text>
)

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular'
  }
})
