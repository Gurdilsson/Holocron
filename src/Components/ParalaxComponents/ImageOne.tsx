import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Parallax } from "react-parallax";
import Space from "../../Images/Space3.jpg"

const useStyles = makeStyles({
    parallaxOne: {
        width: '100vw',
        height: '100vh'
    },
    parallaxImageText: {
        backgroundColor: 'lightBlue',
        border: 'solid',
        borderColor: 'white',
        padding: 10,    
        fontFamily: 'StarJedi',
    },
    parallaxImageLabel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100vh'
    }
})

interface ImageOneProps {
    strength: number
    image: string
    name: string
}

function ImageOne({ strength, image, name }: ImageOneProps) {
    const classes = useStyles()
    return (
        <Parallax className={classes.parallaxOne} bgImage={image} bgImageAlt="space" strength={strength}>
            <div className={classes.parallaxImageLabel}>
                <div className={classes.parallaxImageText}>{name}</div>
            </div>
        </Parallax>
    )
}

export default ImageOne