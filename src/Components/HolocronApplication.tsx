import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Characters from "./Characters";
import Holocron from "./Holocron";
import MainMenu from "./MainMenu";
import StarSky from "../Images/Space_Stars_Background.png"
import HolocronList from "./HolocronList";

const useStyle = makeStyles({
    title: {
        fontFamily: 'StarJedi',
        fontSize: 50,
        margin: '40px auto 0px',
        textAlign: 'center',
        color: 'lightblue'
    },
    mainPageContainer: {
        backgroundImage: `url(${StarSky})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
})

function HolocronApplication() {

    const [state, setState] = useState(0)
    const classes = useStyle()

    function changeState(state: number) {
        setState(state)
    }

    switch (state) {
        case 1: return (
            <Characters
                changeState={changeState}
            />)
        case 2: return (
            <div>
                <HolocronList/>
            </div>
        )
        default: return (
            <div className={classes.mainPageContainer}>
                <Holocron />
                < div className={classes.title} > Holocron </div>
                < MainMenu
                    changeState={changeState}
                />
            </div>
        )
    }

}

export default HolocronApplication