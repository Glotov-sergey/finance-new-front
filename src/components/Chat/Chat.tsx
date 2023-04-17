import React from 'react'
import s from './Chat.module.css'
import folder from '../../assets/Folder.png';

const Chat = () => {

    const tmp = [
        {
            id: 1,
            title: 'Возврат средств',
            date: 'Создано 31 ноября 2022 в 20:07',
            status: 'B процессе',
        },
        {
            id: 2,
            title: 'Возврат средств',
            date: 'Создано 31 ноября 2022 в 20:07',
            status: 'Выполнено',
        },
    ]
  return (
    <div className={s.wrapper}>
        <div className={s.menu}>
            <div className={s.menu__info}>
                <p>Чат со специалистом</p>
                <p>Статус: в процессе</p>
            </div>
            <button className={s.menu__btn}>Добавить новое обращение</button>
            {
                tmp.map(el => (
                    <div key={el.id} className={s.menu__appeal}>
                        <div>
                            <h4 className={s.menu__appealTitle}>{el.title}</h4>
                            <p className={s.menu__appealDate}>{el.date}</p>
                        </div>
                        <div className={s.menu__appealStatus}>
                            {el.status}
                        </div>
                    </div>
                ))
            }
        </div>
        <div className={s.chat}>
            <div className={s.chat__wrapper}>
                <img className={s.chat__img} src={folder} alt="folder" width={76} height={65}/>
                <h2 className={s.chat__title}>Выберите обращение</h2>
                <p className={s.chat__desc}>Выберити необходимое обращение</p>
            </div>
        </div>
    </div>
  )
}

export default Chat