import css from "./FriendList.module.css"
import FriendListItem from './FriendListItem'

export default function FriendList({ friends }) {
    return (
        <div className={css.container}>
    <ul>
        {friends.map(friend => <li className={css.wrapper} key={friend.id}><FriendListItem friends={friend} /></li>)}
    </ul>
        </div>
    )}

// export default function FriendList({friend: {avatar, name, isOnline}}) {

//     return (
//         <div className={css.container}>
//             <img src={avatar} alt="Avatar" width="48" />
//             <p>{name}</p>
//             <p>{isOnline}</p>
//         </div>
//     )
// }