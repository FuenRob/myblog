import React from "react"
import Typewriter from 'typewriter-effect';

export default () => {
    return (
        <div class="banner">
            <div className="container">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('Yo soy Roberto Morais')
                        .pauseFor(2000)
                        .deleteChars(14)
                        .start(
                            typewriter.typeString('FuenRob')
                        )
                        .pauseFor(2000)
                        .deleteAll()
                        .start(
                            typewriter.typeString('¡Bienvenido a mi blog!')
                        );
                    }}
                />
            </div>
        </div>
    )
}