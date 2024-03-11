import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';




export default function About(){
    const [user, setUser]=useState('mario')

    if(!user){
      return <Navigate to="/" replace={true}/>
    }
    return(
        <div className="about">
            <p>A second Georgian tribal union emerged in the 13th century BC on the Black Sea coast under the Kingdom of
                Colchis in western Georgia. The kingdom of Colchis, which existed from the 6th to the 1st centuries 
                BC is regarded as the first early Georgian state formation and the term Colchians was used as the collective term for
                early Georgian-Kartvelian tribes such as Mingrelians,
                Lazs and Chans who populated the eastern coast of the Black Sea.
            </p>
            <p>A second Georgian tribal union emerged in the 13th century BC on the Black Sea coast under the Kingdom of
                Colchis in western Georgia. The kingdom of Colchis, which existed from the 6th to the 1st centuries 
                BC is regarded as the first early Georgian state formation and the term Colchians was used as the collective term for
                early Georgian-Kartvelian tribes such as Mingrelians,
                Lazs and Chans who populated the eastern coast of the Black Sea.
            </p>
            <p>A second Georgian tribal union emerged in the 13th century BC on the Black Sea coast under the Kingdom of
                Colchis in western Georgia. The kingdom of Colchis, which existed from the 6th to the 1st centuries 
                BC is regarded as the first early Georgian state formation and the term Colchians was used as the collective term for
                early Georgian-Kartvelian tribes such as Mingrelians,
                Lazs and Chans who populated the eastern coast of the Black Sea.
            </p>

            <button onClick={()=>setUser(null)}>Logout</button>
        </div>
    )
}