import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [user, setUSer] = useState("Rafael Ramos");

  return (
    <>
      <TaskList user={user} />
    </>
  );
}

export default App;
