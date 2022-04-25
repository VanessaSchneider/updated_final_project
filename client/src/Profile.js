import React, { useState, useEffect } from 'react'
import leprechaunhead from './leprechaunhead.png'
import witchhead from './witchhead.png'
import goblinhead from './goblinhead.png'
import warlockhead from './warlockhead.png'
import { NavLink } from 'react-router-dom'
import useSound from 'use-sound'
import leprechaun from './leprechaun.wav'
import cackle from './watch.wav'
import warlock from './warlock.wav'

function Profile () {
  const [user, setUser] = useState('')
  const [task, setTask] = useState('')

  const [play] = useSound(cackle)
  const [play2] = useSound(leprechaun)
  const [play3] = useSound(warlock)

  useEffect(() => {
    fetch('/me').then(response => {
      if (response.ok) {
        response.json().then(data => setUser(data))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/getTasks')
      .then(res => res.json())
      .then(data => setTask(data))
  }, [])

  return (
    <div>
      <h1>{user.username}'s Journey!</h1>
      <br></br>
      {user.picture ? (
        <img src={user.picture} className='profile' alt='image'></img>
      ) : null}
      {task.task2 ===1 ?<h2>Villains you have defeated!</h2> : null}
      {task.task2 === 1 ? (
        <img src={leprechaunhead} className='watch' alt='image'></img>
      ) : null}
      {task.task3 === 1 ? (
        <img src={witchhead} className='watch' alt='image'></img>
      ) : null}
      {task.task4 === 1 ? (
        <img src={goblinhead} className='watch' alt='image'></img>
      ) : null}
      {task.task5 === 1 ? (
        <img src={warlockhead} className='watch' alt='image'></img>
      ) : null}
      <br></br>
      <br></br>
      <br></br>
      {task.task5 === 0? (
        <h2>Next Villain to defeat!</h2>
      ) : (
        null
      )}
      {task.task2 === 0 ? (
        <div>
          {' '}
          <img src={leprechaunhead} className='watch2' alt='image'></img>
          <NavLink to='/leprechaun'>
            <button onClick={e => play2()} className='the-button'>
              Leprechaun Landing
            </button>
          </NavLink>
        </div>
      ) : null}
      {task.task3 === 0 && task.task2 === 1 ? (
        <div>
          {' '}
          <img src={witchhead} className='watch2' alt='image'></img>
          <NavLink to='/witch'>
            <button onClick={e => play()} className='the-button'>
              Witch's Woods
            </button>
          </NavLink>
        </div>
      ) : null}
      {task.task4 === 0 && task.task3 === 1 ? (
        <div>
          {' '}
          <img src={goblinhead} className='watch2' alt='image'></img>
          <NavLink to='/goblin'>
            <button className='the-button'>Goblin Crossing</button>
          </NavLink>
        </div>
      ) : null}
      {task.task5 === 0 && task.task4 === 1 ? (
        <div>
          {' '}
          <img src={warlockhead} className='watch2' alt='image'></img>
          <NavLink to='/warlock'>
            <button onClick={e => play3()} className='the-button'>
              Warlock's Castle
            </button>
          </NavLink>
        </div>
      ) : null}
    </div>
  )
}

export default Profile
