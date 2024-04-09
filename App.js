import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
export default function App() {
  console.log('aaaaa')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working12 on your app!12</Text>
      <StatusBar style="auto" />
      {/* <WingBlank>
        <WhiteSpace />
        <Button>default</Button>
        <WhiteSpace />
        <Button disabled>default disabled</Button>
        <WhiteSpace />
      </WingBlank> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
