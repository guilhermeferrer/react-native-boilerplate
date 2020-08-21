import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    border-radius: 4px;
    background: white;
    elevation: 2;
    padding: 15px;
    margin-bottom: 10px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.View`
    flex: 1;
`;

export const Avatar = styled.Image`
    resize-mode: cover;
    width: 35px;
    height: 35px;
    border-radius: 20px;
    margin-right: 10px;
`;

export const Name = styled.Text`
    font-size: 16px;
`;

export const Bio = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, .5);
`;