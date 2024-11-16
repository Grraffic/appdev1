import { StudentProvider, StudentProfile } from "./components/StudentProfile";

const App = () => (
  <StudentProvider>
    <div>
      <StudentProfile />
    </div>
  </StudentProvider>
);

export default App;
