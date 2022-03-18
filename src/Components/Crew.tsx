import React, { useState } from "react";
import BackToMenuButton from "./BackToMenuButton";
import CrewData from "../Data/CrewData.json"
import { makeStyles } from "@material-ui/styles";
import Falcon from '../Images/Falcon.png'
import Stars from '../Images/Space_Stars_Background.png'
import classNames from "classnames";
import { useSwipeable } from "react-swipeable";
import BookMark from '../Images/Icons/BookMark.svg'
import KeyBoard from '../Images/Icons/KeyBoard.svg'
import Rocket from '../Images/Icons/Rocket.svg'
import Wrench from '../Images/Icons/Wrench.svg'

const useStyles = makeStyles({
    crewContainer: {
        backgroundImage: `url(${Stars})`,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    crewSelector: {
        width: '100%',
        height: '10vh',
        zIndex: 10,
        display: 'flex',
    },
    falcon: {
        backgroundImage: `url(${Falcon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '50%'
    },
    crewButton: {
        height: '100%',
        width: '25%',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    },
    bookMark: {
        backgroundImage: `url(${BookMark})`,
        backgroundColor: 'lightBlue',
        borderRadius: 20,
    },
    wrench: {
        backgroundImage: `url(${Wrench})`,
        backgroundColor: 'yellow',
        borderRadius: 20,
    },
    keyboard: {
        backgroundImage: `url(${KeyBoard})`,
        backgroundColor: 'lightGreen',
        borderRadius: 20,
    },
    rocket: {
        backgroundImage: `url(${Rocket})`,
        backgroundColor: 'red',
        borderRadius: 20,
    },
    crewLore: {
        backgroundColor: 'white',
        position: 'absolute',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        marginTop: '11vh',
        textAlign: 'justify',
        whiteSpace: 'pre-line',
        zIndex: 5
    },
    falconAnimation: {
        animation: '$falcon-animation1 8s infinite linear',
    },
    falconAnimation2: {
        animation: '$falcon-animation2 8s infinite linear',
    },
    falconAnimation3: {
        animation: '$falcon-animation3 8s infinite linear',
    },
    '@keyframes falcon-animation1': {
        '0%': {
            transform: 'translateY(170%)'
        },
        '100%': {
            transform: 'translateY(-150%)',
        }
    },
    '@keyframes falcon-animation2': {
        '0%': {
            transform: 'translateY(170%)'
        },
        '100%': {
            transform: 'translateY(-150%) rotateZ(180deg)',
        }
    },
    '@keyframes falcon-animation3': {
        '0%': {
            transform: 'translateY(170%)'
        },
        '100%': {
            transform: 'translateY(-150%) rotateZ(-180deg)',
        }
    }
})

interface CrewProps {
    changeState: (number: number) => void
}

interface CrewMember {
    Id: string
    Name: string
    Lore: string
}

function Crew({ changeState }: CrewProps) {
    const classes = useStyles()
    const [direction, setDirection] = useState(classes.falconAnimation)
    const [nextDirection, setNextDirection] = useState(classes.falconAnimation)
    const [zIndex, setZIndex] = useState<number>(0)
    const [actualMember, setActualMember] = useState<CrewMember>()
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir == 'Right') {
                setNextDirection(classes.falconAnimation2)
            } else if (eventData.dir == 'Left') {
                setNextDirection(classes.falconAnimation3)
            } else if (eventData.dir == "Up") {
                setZIndex(10)
            } else if (eventData.dir == "Down") {
                setNextDirection(classes.falconAnimation)
                setZIndex(0)
            }
        }
    })

    function displayLore(character: string) {
        setActualMember(((CrewData as any)[character]))
        if (character === actualMember?.Id) {
            setActualMember(undefined)
        }
    }

    return (
        <div className={classes.crewContainer} {...handlers}>
            <BackToMenuButton changeState={changeState} />
            <div className={classes.crewSelector}>
                <div className={classNames(classes.crewButton, classes.bookMark)} onClick={() => displayLore("Ando")} />
                <div className={classNames(classes.crewButton, classes.keyboard)} onClick={() => displayLore("Devalan")} />
                <div className={classNames(classes.crewButton, classes.rocket)} onClick={() => displayLore("Zavan")} />
                <div className={classNames(classes.crewButton, classes.wrench)} onClick={() => displayLore("Meliwe")} />
            </div>
            {actualMember &&
                <div className={classes.crewLore}>{actualMember?.Lore}</div>
            }
            <div
                className={classNames(classes.falcon, direction)}
                onAnimationIteration={() => setDirection(nextDirection)}
                style={{ zIndex: zIndex }}></div>
        </div >
    )
}

export default Crew