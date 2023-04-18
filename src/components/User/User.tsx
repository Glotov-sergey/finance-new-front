import React, { useState } from 'react'
import s from './User.module.css'
import UserSidebar from './UserSidebar/UserSidebar'
import UserNavbar from './UserNavbar/UserNavbar'
import Score from '../Score/Score'
import Balance from '../Balance/Balance'
import Chat from '../Chat/Chat'
import Settings from '../Settings/Settings'
import Notification from '../Notification/Notification'

const User = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <section className={s.wrapper}>
      <UserSidebar setActivePage={setActivePage}/>
      <div className={s.content}>
        <UserNavbar/>
        {activePage === 1 && <Score/>}
        {activePage === 2 && <Balance/>}
        {activePage === 3 && <Chat/>}
        {activePage === 4 && <Settings/>}
        {activePage === 5 && <Notification/>}
      </div>
    </section>
  )
}

export default User