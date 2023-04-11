import React from 'react'
import s from './User.module.css'
import Sidebar from './Sidebar/Sidebar'
import Navbar from '../ConsultantPanel/Navbar/Navbar'
import Score from '../Score/Score'

const User = () => {
  return (
    <section className={s.wrapper}>
      <Sidebar/>
      <div>
        <Navbar/>
        <Score/>
      </div>
    </section>
  )
}

export default User