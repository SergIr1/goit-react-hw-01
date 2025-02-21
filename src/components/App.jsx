import './App.css'
import Profile from './Profile';
import userData from "../consigs/userData.json";

console.log(userData.stats.followers)
export default function App() {
  return (
    <>
      <Profile profile={userData}
        // name={userData.username}
        // tag={userData.tag}
        // location={userData.location}
        // image={userData.avatar}
        // stats={userData.stats}
      />
    </>
  );
}
