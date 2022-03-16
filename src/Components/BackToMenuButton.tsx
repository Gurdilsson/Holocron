import { makeStyles } from "@material-ui/core";
import React from "react";
import BackArrow from '../Images/back-arrow.jpg'

const useStyles = makeStyles({
    characterBackToMenuButton: {
        position: 'fixed',
        height: 20,
        width: 20,
        zIndex: 1000,
        opacity: 0.3,
        border: 'none',
        backgroundImage: `url(${BackArrow})`,
        backgroundSize: 'contain',
        cursor: 'pointer',
    },
})

interface BackToMenuButtonInterface {
    changeState: (number: number) => void
}

function BackToMenuButton({changeState}: BackToMenuButtonInterface) {
    const classes = useStyles()
    return (
        <button
            className={classes.characterBackToMenuButton}
            onClick={() => changeState(0)}
        />
    )
}

export default BackToMenuButton