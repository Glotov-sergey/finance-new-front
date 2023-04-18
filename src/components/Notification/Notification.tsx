import React from 'react'
import s from './Notification.module.css'
import close from '../../assets/close.svg'

const Notification = () => {
    const tmp = [
        {
            title: 'Добрый день, Павел Вершинин! Команад Club Consulting рада приветствовать Вас!',
            desc: 'Наши приоритетные задача это достижение Ваших финансовых целей за макксимально короткий период времени.По всем возникающимм вопросам вы можете обратиться к консультату, который закреплен за вами.',
            date: 'Четверг, 10 ноября',
        },
        {
            title: 'Добрый день, Павел Вершинин! Команад Club Consulting рада приветствовать Вас!',
            desc: 'Наши приоритетные задача это достижение Ваших финансовых целей за макксимально короткий период времени.По всем возникающимм вопросам вы можете обратиться к консультату, который закреплен за вами.',
            date: 'Четверг, 10 ноября',
        },
        {
            title: 'Добрый день, Павел Вершинин! Команад Club Consulting рада приветствовать Вас!',
            desc: 'Наши приоритетные задача это достижение Ваших финансовых целей за макксимально короткий период времени.По всем возникающимм вопросам вы можете обратиться к консультату, который закреплен за вами.',
            date: 'Четверг, 10 ноября',
        },
    ]
  return (
    <div className={s.notification}>
        <h3 className={s.notification__title}>Уведомления</h3>
        {
            tmp.map(el => (
                <div className={s.note}>
                    <h4>{el.title}</h4>
                    <p className={s.note__text}>{el.desc}</p>
                    <p className={s.note__date}>{el.date}</p>
                    <button className={s.note__btn}>
                        <img src={close} alt="close" />
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default Notification;