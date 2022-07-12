import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../reducers/ScreenColors';

export const Container = styled.TouchableOpacity`
    background-color: ${colors.lightColor};
    height: 150px;
    width: 150px;
    flex-direction: row;
    margin: 8px;
`;
export const Avatar = styled.Image`
    width: 100%;
    height: 100%; 
    background-color: #9992;
`;
export const HearsContent = styled.View`
    flex: 2
    padding: 10px
`;
export const Title = styled.Text`
    font-size: 16px;
    color: #333;
`;

export default ({ data }) => {
    return (
        <Container activeOpacity={0.9}>
            <Avatar source={{uri: data.avatarCorte}} />
            <HearsContent>
                <Title>{data.nome}</Title>
                <Title>{data.valor} R$</Title>
            </HearsContent>
        </Container>
    );
}

/**/