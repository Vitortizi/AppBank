import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Text from '../components/Text'
import NumberPad from "../components/NumberPad";

export default SendRequestScreen = ({ onPress }) => {
    const [amount, setAmount] = useState("0");

    const convertToDollars = (currentAmount) => {
        const newAmount = currentAmount / 100

        return newAmount.toLocaleString("pt_BR", {  prefix: "R$", style: "currency", currency: "BRL"})
    }

    const presskey = (item, index) => {
        setAmount((prev) => {
            return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
        });
    };

    return(
        <Container>
            <Text center large heavy margin="16px 0 0 0">Send</Text>
            <Amount>
            <Text title heavy>{convertToDollars(amount)}</Text>
                <Text bold color="#727479">Choose amount to send</Text>
            </Amount>

            <User>
                {/* <ProfilePhoto source={require('')} /> */}
                <UserDetails>
                    <Text medium heavy>Tomazini</Text>
                </UserDetails>
            </User>

            <Send>
                <Text medium heavy>Send {convertToDollars(amount)} to Tomazini</Text>
            </Send>

            <Container2>
                <NumberPad onPress={presskey} />
            </Container2>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Container2 = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`;

const Amount = styled.View`
    margin-top: 30px;
    align-items: center;
`;

const User = styled.View`
    margin: 32px 16px;
    flex-direction: row;
    align-items: center;
`;

const ProfilePhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 12px;
`;

const UserDetails = styled.View`
    flex: 1;
    margin: 0 16px;
`;

const Send = styled.TouchableOpacity`
    margin: 16px;
    background-color: #5196f4;
    padding: 16px 32px;
    align-items: center;
    border-radius: 12px;
`;

