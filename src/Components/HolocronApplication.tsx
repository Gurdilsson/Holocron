import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Characters from "./Characters";
import Holocron from "./Holocron";
import MainMenu from "./MainMenu";

const useStyle = makeStyles({
    title: {
        fontFamily: 'StarJedi',
        fontSize: 50,
        margin: '40px auto 0px',
        textAlign: 'center',
        color: 'lightblue'
    }
})

function HolocronApplication() {

    const [state, setState] = useState(1)
    const classes = useStyle()

    switch (state) {
        case 1 : return (<Characters/>)
        default: return (
        <div>
            <Holocron />
            < div className={classes.title} > Holocron </div>
            < MainMenu />
        </div>
    )
}

}

export default HolocronApplication