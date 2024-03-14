import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'

import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two 33333311</Text>
      <Button>default</Button>
      <Button>default</Button>
      <Text style={styles.title}>Tab Two 56757</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* <Button>default</Button> */}
      <Text style={styles.title}>Tab Two 56757</Text>

      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  }
})
