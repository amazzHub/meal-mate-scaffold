import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create(
    {
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        screen: {
            width,
            height,
        },
    }
);