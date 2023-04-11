import React from 'react'
import s from './User.module.css'
import UserSidebar from './UserSidebar/UserSidebar'
import UserNavbar from './UserNavbar/UserNavbar'
import Score from '../Score/Score'

const User = () => {
  return (
    <section className={s.wrapper}>
      <UserSidebar/>
      <div className={s.content}>
        <UserNavbar/>
        <Score/>
      </div>
    </section>
  )
}

export default User