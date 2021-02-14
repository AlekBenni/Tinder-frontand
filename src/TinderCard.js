import React from 'react'
import { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.cityam.com/wp-content/uploads/2021/01/Elon-Musk-Awarded-With-Axel-Springer-Award-In-Berlin-1229892421-960x668.jpg"
        },
        {
            name: "Aleksey Navalny",
            url: "http://sun9-72.userapi.com/s/v1/if1/v6Wh8uPLg0sWsleXvdjlNp5ZfbhuWxStMZ6zD0gYcOf_9ryfT9nVKObN5i7NTSfZbu64Sw.jpg?size=400x0&quality=96&crop=0,0,538,538&ava=1"
        },
        {
            name: "Bruna Lopes",
            url: "https://gay.blog.br/wp-content/uploads/2020/11/bruna_maravilha_Capa.jpg"
        }
    ])

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
                    style={ {backgroundImage: `url(${person.url})`}}
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
