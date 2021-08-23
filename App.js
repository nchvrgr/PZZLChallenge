import React, {useEffect, useState, useRef} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import style from './App.style';
import Carousel from './components/Carousel/Carousel';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import Paging from './components/Paging/Paging';

export default function App() {

    const [page, setPage] = useState(0);
    const [cards, setCards] = useState([]);
    const cardsRef = useRef(0);
    const [index, setIndex] = useState(0);    
    
    const saveIndex = async (index) => {
        if (index >= 0) {
            try {
                await AsyncStorage.setItem("@lastViewedIndex", index.toString());
            } catch(err){
                console.log(err);
            }
        }
    };

    const onScroll = useRef(({viewableItems}) => {
        setIndex(viewableItems ? viewableItems[0].index : 0)
    }).current;


    function scrollNext(){
        if (index < cards.length - 1) {
            cardsRef.current.scrollToIndex({ index: index + 1, animated: true });
        }
        if (index >= 0) {
            saveIndex(index + 1);
        }
    };

    function ScrollPrev(){
        if (index > 0) {
            cardsRef.current.scrollToIndex({ index: index - 1, animated: true });
        }
        if (index >= 0) {
            saveIndex(index - 1);
        }
    }

    async function getCards(){
        try{
            const {data} = await axios.get('https://pzzlc-hallenge-data.vercel.app/api');
            await setCards(data);
        }
        catch(err){
            console.log(err)
        }
    }

    function handleDisabledPrev(){
        if(index < 1) return true;
        return false;
    }

    function handleDisabledNext() {
        if(index === cards.length - 1) return true;
        return false;
    }

    function handleButtonStyle(prev){
        if(prev){
            if(index < 1) return style.disabledButton;
            return style.button;
        }else{
            if(index === cards.length - 1) return style.disabledButton;
            return style.button;
        }
    }

    useEffect(() => {
        getCards();
    }, [page]);

    return (
        <>
            <View style={style.app}>
                <Text style={style.text}>Puzzle Carousel</Text>
                <View style={style.container}>
                    <Carousel index={index} cards={cards} cardsRef={cardsRef} onScroll={onScroll}/>
                </View>
                <Paging page={index+1} total={cards}/>
                <View style={style.buttons}>
                    <TouchableOpacity 
                        style={handleButtonStyle('prev')}
                        onPress={ScrollPrev}
                        disabled={handleDisabledPrev()}
                    >
                        <Text style={style.arrow}>←</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={scrollNext}
                        disabled={handleDisabledNext()}
                        style={handleButtonStyle()}
                    >
                        <Text style={style.arrow}>→</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.createdBy}> Created by Nacho </Text>
            </View>
        </>

    );
}

//                            \(>u<)/