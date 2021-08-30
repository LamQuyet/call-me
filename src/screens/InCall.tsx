import React, { useState } from 'react';
import { Text } from 'react-native'
import AgoraUIKit from 'agora-rn-uikit';

const inCall = ({ navigation }: { navigation: any }) => {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
        appId: 'bd082fe6626440a6b16e6256814524f8',
        channel: 'meet',
    };
    const callbacks = {
        EndCall: () => {
            setVideoCall(false), navigation.navigate('FirstScreen')
        },
    };
    return (
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    )
};

export default inCall;
