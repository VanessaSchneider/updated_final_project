import React, { useState, useEffect } from 'react'
import useSound from 'use-sound';
import cackle from "./watch.wav"

function WitchSound(){


  const [play] = useSound(cackle);

  function PlaySound() {
    play()

  }

  return( <button onClick={PlaySound}>What is that ghastly sound?</button>)
}


export default WitchSound;