import React from 'react'
import { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {

    const [people, setPeople] = useState([ ])

    useEffect(() => {
        async function fatchData(){
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)
        }
        fatchData()
    },[])

    const swiped = (direction, nameToDelite) => {
        console.log("removing" + nameToDelite)
    }

    const outOfFrame = (name) => {
        console.log(name + "Left The Screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardsContainer">
            {people.map((person) => {
                return (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                    className="card"
                    style={ {backgroundImage: `url(${person.imgUrl})`}}
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                )
            })}
            </div>
        </div>
    )
}

export default TinderCards
