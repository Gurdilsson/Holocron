import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
    menuContainer: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        margin: '20px 10% 0px',
        columnGap: 10,
        rowGap: 10
    },
    menuButton: {
        backgroundColor: 'lightblue',
        borderRadius: 20,
        cursor: 'pointer',
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'StarJedi',
    },
    menuText: {
        textAlign: 'center'
    }
})

interface MainMenuProps {
    changeState: (number: number) => void
}

function MainMenu({ changeState }: MainMenuProps) {
    const classes = useStyles()
    return (
        <div className={classes.menuContainer}>
            <div
                className={classes.menuButton}
                onClick={() => changeState(1)}
            >
                <div className={classes.menuText}>Les personnages</div>
            </div>
            <div className={classes.menuButton}>
                <div className={classes.menuText}>L'équipage</div>
            </div>
            <div
                className={classes.menuButton}
                onClick={() => changeState(3)}>
                <div className={classes.menuText}>Les holocrons</div>
            </div>
            <div
                className={classes.menuButton}
                onClick={() => changeState(4)}>
                <div className={classes.menuText}>Les lieux</div>
            </div>
        </div>
    )
}

export default MainMenu