// conditional rendering = allows  you to render different components or elements based on certain conditions.
import UserGreeting from "./UserGreeting"

function App() {


  return (
    <>
      <UserGreeting  isLoggedIn={true} username="Shadvonic"/>
    </>
  )
}

export default App
