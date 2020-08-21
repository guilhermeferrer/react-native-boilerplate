import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 25px 0;
`;

export const Input = styled.TextInput`
    background: white;
    height: 50px;
    width: 80%;
    elevation: 1;
    border-radius: 3px;
    padding: 0 10px;
    margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
    width: 80%;
    height: 50px;
    background: #79B8FF;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
`;

export const Scroll = styled.ScrollView.attrs(props => ({
    ...props,
    contentContainerStyle: {
        paddingVertical: 15
    }
}))`
    width: 80%;
`;

export const ButtonText = styled.Text`
    color: white;
`;