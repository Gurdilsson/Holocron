import { makeStyles } from "@material-ui/styles";
import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Matt from '../Images/matt07.jpg'
import Tann from '../Images/Tan12.jpg'
import Stroke from '../Images/Stroke-05.jpg'
import Teka from '../Images/Teka-07.jpg'
import CharacterData from '../Data/CharacterData.json'
import useWindowDimensions from "../Hooks/UseWindowDimension";
import BackToMenuButton from "./BackToMenuButton";


const useStyles = makeStyles({
    characterContainer: {
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'lightBlue',
        display: 'flex',
    },
    characterContainerHorizontal: {
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'lightBlue',
    },
    characterList: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    characterImage: {
        width: '100vw',
        flex: 1,
        transition: 'transform 1s'
    },
    characterText: {
        border: 'solid',
        margin: 5,
        padding: 10,
        animation: '$myAnim  15s infinite linear',
        textAlign: 'justify',
        flex: 1,
        whiteSpace: 'pre-line',
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'scroll'
    },
    '@keyframes rotation': {
        '0%': {
            transform: 'rotateX(180deg)'
        },
        '100%': {
            transform: 'rotateX(0deg)'
        }
    }
})

const characterList = [Tann, Matt, Stroke, Teka]
const characterStringList = ["Tann", "Matt", "Stroke", "Teka"]

interface CharactersProps {
    changeState: (number: number) => void
}

function Characters({ changeState }: CharactersProps) {
    const [percent, setPercent] = useState(0)
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir == 'Left') {
                nextImage()
            } else if (eventData.dir == 'Right') {
                previousImage()
            }
        }
    })
    const classes = useStyles()
    const { height, width } = useWindowDimensions()

    function nextImage() {
        setPercent((percent + 100) % 400)
    }
    function previousImage() {
        percent == 0 ? setPercent(300) : setPercent(percent - 100)
    }
    function getCharacterData() {
        const actualCharacter: string = characterStringList[percent / 100].toString()
        return ((CharacterData as any)[actualCharacter])
    }

    return (
        <div className={height > width ? classes.characterContainer : classes.characterContainerHorizontal} {...handlers}>
            <BackToMenuButton changeState={changeState} />
            <div className={classes.characterList} >
                {characterList.map(character =>
                    <img
                        className={classes.characterImage}
                        key={character}
                        src={character}
                        alt={character}
                        style={{ transform: `translateX(-${percent}%)` }} />)}
            </div>
            <div
                className={classes.characterText}
                style={{ transform: '' }}>
                {getCharacterData()}
            </div>
        </div>

    )
}

export default Characters