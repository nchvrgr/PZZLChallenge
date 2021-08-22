import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import Card from '../Card/Card';
import style from './Carousel.style';
import Paging from '../Paging/Paging';

function Carousel({cards, cardsRef, index, onScroll}) {

    const {width} = useWindowDimensions();

    return (
        <View style={style.screen}>
        {
            cards ? (
            <View style={style.carousel}>
                <FlatList 
                    data={cards}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment='center'
                    snapToInterval={width}
                    scrollEventThrottle={32}
                    decelerationRate={50}
                    bounces={false}
                    keyExtractor={ (item) => item.id}
                    renderItem={ ({item} ) => (
                        <Card
                            key={item.id.toString()}
                            data={item} 
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged= {onScroll}
                    ref={cardsRef}
                >
                </FlatList>
            </View>
            ) : (
            <Text>Loading</Text>
            )         
        }
        </View>
    )
}

export default Carousel;

