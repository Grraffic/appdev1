import "./App.css";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

function App() {
  // let content;
  let isLoggedIn = true;

  // if (isLoggedIn) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }

  return (
    <>
      <h1>Welcome to my app</h1>
      {/* {isLoggedIn ? <AdminPanel /> : <LoginForm />} */}
      {isLoggedIn && <AdminPanel />}
    </>
  );
}

export default App;
