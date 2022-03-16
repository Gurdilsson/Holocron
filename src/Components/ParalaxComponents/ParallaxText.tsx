import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
    GalaxyTextZone: {
        border: 'solid',
        padding: 10,
        textAlign: 'justify',
        flex: 1,
        whiteSpace: 'pre-line',
        backgroundColor: 'white'
    }
})

interface ParallaxTextProps {
    text: string
}

function ParallaxText({text}: ParallaxTextProps) {
    const classes = useStyles()
    return(
        <div className={classes.GalaxyTextZone}>
            {text}
        </div>
    )
}

export default ParallaxText