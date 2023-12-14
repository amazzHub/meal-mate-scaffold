import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { MainStack } from './src/navigation/main.stack';
import { AppProvider } from './src/context/app.provider';

const App: React.FC = () => {

    return <AppProvider>
        <View style={styles.container}>
            <MainStack />
            <StatusBar style="auto" />
        </View>
    </AppProvider>;
};

export default App;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
    }
);
