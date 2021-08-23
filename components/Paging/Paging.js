import React from 'react'
import { Text, View } from 'react-native'
import style from './Paging.style';

function Paging({page, total}) {

    function handleStyle(dot) {
        if(dot.id == page) return style.whiteDot;
        return style.blackDot;
    }
    return (
        <View style={style.dots}>
        {   total ? total.map( dot => {
                return(
                    <Text key={dot.id} style={handleStyle(dot)}>
                        •
                    </Text>
                )
            })
            : (
                <Text>A</Text>
            )
        }
        </View>
    )
}

export default Paging
