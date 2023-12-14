import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const BackButton: React.FC = () => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return <Pressable onPress={() => navigation.pop()} style={{ marginLeft: 16 }}>
        <Ionicons name="arrow-back-sharp" size={30} color="black" />
    </Pressable>
};
