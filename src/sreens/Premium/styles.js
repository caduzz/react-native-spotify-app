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