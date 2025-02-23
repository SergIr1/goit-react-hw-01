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