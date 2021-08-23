import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, useWindowDimensions } from 'react-native'
import Card from '../Card/Card';
import style from './Carousel.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Carousel({cards, cardsRef, index, onScroll}) {

    const {width} = useWindowDimensions();
    const [value, setValue] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const lastViewedIndex = await AsyncStorage.getItem(
                    "@lastViewedIndex"
                );
                if (lastViewedIndex) {
                    setValue(lastViewedIndex);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <View style={style.screen}>
        {
            cards ? (
            <View style={style.carousel}>
                <FlatList 
                    initialNumToRender={value}
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

