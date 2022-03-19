import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import BackToMenuButton from "./BackToMenuButton";
import HolocronData from "../Data/Holocrons.json"
import { useSwipeable } from "react-swipeable";

const combinaisons = new Map(Object.entries(HolocronData))
combinaisons.forEach(element => {
})

const useStyles = makeStyles({
    holoconListContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        backgroundColor: 'black',
    },
    holocronData: {
        border: 'solid',
        flex: 1,
        borderRadius: 20,
    },
    holocronDataName: {
        fontFamily: 'StarJedi',
        textAlign: "center"
    },
    holocronDataText: {
        textAlign: 'justify',
        whiteSpace: 'pre-line',
        margin: 10
    },
    useTheForce: {
        color: 'white',
        textAlign: "center",
        flex: 1,
        fontFamily: 'StarJedi',
        alignSelf: 'center'
    }
})

function compareArray(firstArray: string[], secondArray: string[]): boolean {
    if (firstArray.length !== secondArray.length) return false
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            return false
        }
    }
    return true
}

interface HolocronListProps {
    changeState: (number: number) => void
}

interface HolocronProps {
    Name: string
    Sequence: string
    Text: string
    Color: string
}

function HolocronList({ changeState }: HolocronListProps) {
    const [actualCombinaison, setActualCombinaison] = useState<string[]>([])
    const [actualHolocron, setActualHolocron] = useState<HolocronProps>()
    const classes = useStyles()
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            actualCombinaison.push(eventData.dir)

            let stillOneCombinaisonOk = false

            combinaisons.forEach(element => {
                if (compareArray(actualCombinaison, element.Sequence.split(" "))) {
                    setActualHolocron(element)
                    setActualCombinaison([])
                }
                if (!compareArray(actualCombinaison, element.Sequence.split(" ").slice(0, actualCombinaison.length))) {
                } else {
                    stillOneCombinaisonOk = true
                }
            });

            if (!stillOneCombinaisonOk) setActualCombinaison([])
        }

    })

    return (
        <div className={classes.holoconListContainer} {...handlers}>
            <BackToMenuButton changeState={changeState} />
            {!actualHolocron &&
                <div className={classes.useTheForce}>utilise la force</div>
            }
            {actualHolocron &&
                <div
                    className={classes.holocronData}
                    style={{ color: actualHolocron.Color }}>
                    <div className={classes.holocronDataName}>
                        {actualHolocron?.Name}
                    </div>
                    <div className={classes.holocronDataText}>
                        {actualHolocron?.Text}
                    </div>
                </div>
            }

        </div>
    )
}

export default HolocronList