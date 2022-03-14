import { makeStyles } from "@material-ui/styles";
import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Matt from '../Images/matt07.jpg'
import Tann from '../Images/Tan12.jpg'
import Stroke from '../Images/Stroke-05.jpg'
import Teka from '../Images/Teka-07.jpg'
import classNames from "classnames";


const useStyles = makeStyles({
    characterImage: {
        maxWidth: 500,
        width: '100%'
    },
    characterList: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    characterImage2: {
        width: '100vw',
        flex: 1,
        transition: 'transform 1s'
    }
})

const characterList = [Tann, Matt, Stroke, Teka]

function Characters() {
    const [percent, setPercent] = useState(0)
    function nextImage() {
        setPercent((percent + 100) % 400)
    }
    function previousImage() {
        percent == 0 ? setPercent(300) : setPercent(percent - 100)
    }
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir == 'Left') {
                nextImage()
            } else if (eventData.dir == 'Right') {
                previousImage()
            }
        }
    })

    const slides = useRef(null)
    const classes = useStyles()
    return (
        <div >
            <div className={classes.characterList} {...handlers}>
                {characterList.map(character =>
                    <img
                        className={classes.characterImage2}
                        src={character}
                        alt="" 
                        style={{transform: `translateX(-${percent}%)`}}/>)}
            </div>
        </div>

    )
}

export default Characters