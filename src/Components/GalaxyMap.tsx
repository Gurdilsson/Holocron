import { makeStyles } from "@material-ui/styles";
import React from "react";
import ImageOne from "./ParalaxComponents/ImageOne";
import ParallaxText from "./ParalaxComponents/ParallaxText";
import MedusaTwo from '../Images/Planets/Medusa2.png'
import MedusaFour from '../Images/Planets/Medusa4.png'
import Spintir from '../Images/Planets/Spintir.png'
import Nur from '../Images/Planets/Nur.png'
import Thalis from '../Images/Planets/Thalis.png'
import ZaunaThree from '../Images/Planets/Zauna3.png'
import Utapau from '../Images/Planets/Utapau.png'
import Paradisia from '../Images/Planets/Paradisia.png'
import useWindowDimensions from "../Hooks/UseWindowDimension"
import PlanetLore from '../Data/Planet.json'
import BackToMenuButton from "./BackToMenuButton"

const useStyles = makeStyles({
    galaxyContainer: {
        backgroundColor: 'black'
    }
})

interface GalaxyMapProps {
    changeState: (number: number) => void
}

function GalaxyMap({ changeState }: GalaxyMapProps) {
    const { height, width } = useWindowDimensions()
    const strength = height < width ? 200 : 800
    const classes = useStyles()
    return (
        <div>
            <BackToMenuButton changeState={changeState} />
            <div className={classes.galaxyContainer}>
                <ImageOne strength={strength} image={Spintir} name={"s p i n t i r"} />
                <ParallaxText text={PlanetLore.Spintir} />
                <ImageOne strength={strength} image={Utapau} name={"u t a p a u"} />
                <ParallaxText text={PlanetLore.Utapau} />
                <ImageOne strength={strength} image={ZaunaThree} name={"z a u n a"} />
                <ParallaxText text={PlanetLore.Zauna} />
                <ImageOne strength={strength} image={MedusaFour} name={"m e d u s a  4"} />
                <ParallaxText text={PlanetLore.Medusa} />
                <ImageOne strength={strength} image={MedusaTwo} name={"m e d u s a  2"} />
                <ParallaxText text={PlanetLore.MedusaBis} />
                <ImageOne strength={strength} image={Paradisia} name={"p a r a d i s i a"} />
                <ParallaxText text={PlanetLore.Paradisia} />
                <ImageOne strength={strength} image={Nur} name={"n u r"} />
                <ParallaxText text={PlanetLore.Mur} />
                <ImageOne strength={strength} image={Thalis} name={"t h a l i s"} />
                <ParallaxText text={PlanetLore.Thalis} />
            </div>

        </div>
    )
}

export default GalaxyMap