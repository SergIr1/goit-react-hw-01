import css from './FriendList.module.css'

export default function FriendListItem({friends: {avatar, name, isOnline}}) {

    return (
        <>
            <span className={css.span}>{isOnline}</span>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.text}>{name}</p>
        </>
    )
}