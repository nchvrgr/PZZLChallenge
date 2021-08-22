import React from 'react'
import { View, Image, Text, useWindowDimensions } from 'react-native';
import style from './Card.style';

function Card({data}) {
    const {width} = useWindowDimensions();
    const randomImage = data.images[Math.round(Math.random() * (data.images.length - 1))];
    return (
        <>
        {
            data ? 
            (<View style={style.card}>
                <Image
                    style={[style.image, {width}]}
                    source={{
                            uri: randomImage
                    }}
                />
                <Text style={style.title}>{data.title}</Text>
            </View>) 
            : (<Text>Loading card</Text>)
        }
        </>
    )
}

export default Card;
