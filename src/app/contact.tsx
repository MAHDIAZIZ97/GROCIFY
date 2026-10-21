import { View, Text, StyleSheet } from 'react-native'

const contact = () => {
  return (
    <View>
      <Text style={styles.contact}>contact screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    contact: {
        marginTop: 130,
        marginLeft: 130,
        color: "blue",
        fontSize: 25,
    }
})

export default contact