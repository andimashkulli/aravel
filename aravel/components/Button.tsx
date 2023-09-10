import React from 'react'
import { Text, Touchable, TouchableOpacity } from 'react-native'

interface Button {
    onPress: () => void,
    children: any,
    buttonStyle: any,
    textStyle: any,
}

const Button:React.FC<Button> = ({onPress, children, buttonStyle, textStyle}) => {
return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text className={textStyle}>
{children}
    </Text>
    </TouchableOpacity>
)
}


export default Button