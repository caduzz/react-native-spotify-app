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
    font-size: 15px;
    font-weight: bold;
    color: ${colors.lightColor};
`;

export const HeaderIcon = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const ListArea = styled.View`
    flex: 1;
    padding: 15px;
`;

export const BarbersContent = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    background-color: ${colors.lightColor};
    border-radius: 10px;
    margin-bottom: 15px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;