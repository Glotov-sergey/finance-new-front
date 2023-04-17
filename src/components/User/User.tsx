import React from 'react'
import s from './User.module.css'
import UserSidebar from './UserSidebar/UserSidebar'
import UserNavbar from './UserNavbar/UserNavbar'
import Score from '../Score/Score'
import Balance from '../Balance/Balance'
import Chat from '../Chat/Chat'

const User = () => {
  return (
    <section className={s.wrapper}>
      <UserSidebar/>
      <div className={s.content}>
        <UserNavbar/>
        <Chat/>
        {/* <Balance/> */}
        {/* <Score/> */}
      </div>
    </section>
  )
}

export default User