import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainRoute from './src/routes/MainRoute';


export default function App() {
  const Stack = createNativeStackNavigator();

  const Home = () => <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} />

  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
