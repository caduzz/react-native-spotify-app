import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { colors } from '../../reducers/ScreenColors';

import { Octicons, Entypo } from '@expo/vector-icons';

const MainTab = styled.View`
    height: auto;
    background-color: ${colors.bgColor};
    justify-content: center;
    align-items: center;
`
const TabArea = styled.View`
    padding: 1px;
    width: 100%;
    background-color: ${colors.tabBarBgColor};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const TabItem = styled.TouchableOpacity`
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`;

const TitleTab = styled.Text`
    margin-top: 10px;
    font-size: 10px;
`;

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <MainTab>

            <TabArea>
                <TabItem
                    onPress={()=>goTo('Inicio')}
                >
                    <Octicons name="home" size={23} color={ state.index===0? colors.colorActive: colors.iconColor} />
                    <TitleTab style={{ color: state.index===0? colors.colorActive: colors.iconColor }}>
                        Início
                    </TitleTab>
                </TabItem>
                <TabItem
                    onPress={()=>goTo('Buscar')}
                >
                    <Octicons name="search" size={23} color={ state.index===1? colors.colorActive: colors.iconColor} />
                    <TitleTab style={{ color: state.index===1? colors.colorActive: colors.iconColor }}>
                        Buscar
                    </TitleTab>
                </TabItem>
                <TabItem
                    onPress={()=>goTo('Favoritos')}
                >
                    <Octicons name="heart" size={23} color={ state.index===2? colors.colorActive: colors.iconColor} />
                    <TitleTab style={{ color: state.index===2? colors.colorActive: colors.iconColor }}>
                        Favoritos
                    </TitleTab>
                </TabItem>
                <TabItem
                    onPress={()=>goTo('Premium')}
                >
                    <Entypo name="spotify" size={23} color={ state.index===3? colors.colorActive: colors.iconColor} />
                    <TitleTab style={{ color: state.index===3? colors.colorActive: colors.iconColor }}>
                        Premium
                    </TitleTab>
                </TabItem>
            </TabArea>

        </MainTab>
    );
}

/**/