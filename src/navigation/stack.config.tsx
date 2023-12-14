import { BackButton } from "../components/backButton.component";

export const defaultStackHeaderOptions = {
    headerTitle: ' ',
    headerStyle: {
        backgroundColor: 'white',
        shadowOpacity: 0,
        elevation: 0,
    },
    headerLeft: () => <BackButton />
};