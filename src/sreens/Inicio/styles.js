import React from "react";
import styled from 'styled-components';

import { colors } from "../../reducers/ScreenColors";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.bgColor};
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const Header = styled.SafeAreaView`
    width: 100%;
    height: auto;
    padding: 20px;
    padding-top: 35px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const HeaderTitle = styled.Text`
    flex: 2;
    font-size: 25px;
    font-weight: bold;
    color: ${colors.lightColor};
`;

export const HeaderIcon = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const ScrollMusic = styled.ScrollView`
    height: 200px;
    width: 100%;
    flex-direction: row;
    padding: 10px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;