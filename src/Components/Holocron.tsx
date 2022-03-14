import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import React from "react";
import holocronFace from "../Images/holocronFace.png"

const useStyles = makeStyles({
    container: {
        width: 200,
        height: 200,
        perspective: 1000,
        margin: '100px auto 0px'
    },
    cube: {
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        animation: '$spin 15s infinite linear'
    },
    face: {
        position: 'absolute',
        width: 200,
        height: 200
    },
    front: {
        backgroundImage: `url(${holocronFace})`,
        transform: 'rotateX(0deg) translateZ(100px)'
    },
    back: {
        backgroundImage: `url(${holocronFace})`,
        transform: 'rotateX(-180deg) translateZ(100px)'
    },
    right: {
        backgroundImage: `url(${holocronFace})`,
        transform: 'rotateY(90deg) translateZ(100px)'
    },
    left: {
        backgroundImage: `url(${holocronFace})`,
        transform: 'rotateY(-90deg) translateZ(100px)'
    },
    top: {
        backgroundImage: `url(${holocronFace})`,
        transform: 'rotateX(90deg) translateZ(100px)'
    },
    bottom: {
        backgroundImage: `url(${holocronFace})`,
        transform: 'rotateX(-90deg) translateZ(100px)'
    },
    '@keyframes spin': {
        'from': {
            transform: 'rotateX(0deg) rotateY(0deg)'
        },
        'to': {
            transform: 'rotateX(360deg) rotateY(360deg)'
        }
    }
})

function Holocron() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.cube}>
                <div className={classNames(classes.face, classes.front)}></div>
                <div className={classNames(classes.face, classes.back)}></div>
                <div className={classNames(classes.face, classes.right)}></div>
                <div className={classNames(classes.face, classes.left)}></div>
                <div className={classNames(classes.face, classes.top)}></div>
                <div className={classNames(classes.face, classes.bottom)}></div>
            </div>
        </div>
    )
}

export default Holocron