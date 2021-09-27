import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const handleName = (x) => {
    alert(x);
  };
  const style = { color: "blue", textAlign: "left", margin: "15px" };
  return (
    <div className="App" style={style}>
      <Profile
        fullname="zainab tarek"
        profession="programmer"
        bio="hiiii"
        handleName={handleName}
      >
        https://via.placeholder.com/150
      </Profile>
      <hr />
      <Profile />
    </div>
  );
}

export default App;
