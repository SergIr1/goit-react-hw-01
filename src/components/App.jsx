import './App.css'
import Profile from './Profile/Profile';
import userData from "../consigs/userData.json";

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
