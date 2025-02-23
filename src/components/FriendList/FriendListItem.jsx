import css from './FriendList.module.css'

export default function FriendListItem({friends: {avatar, name, isOnline}}) {

    return (
        <>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.text}>{name}</p>
            <p className={css.textStatus}>{isOnline ? "Online" : "Offline"}</p>
        </>
    )
}