import AddInspirationForm from "./components/AddInspirationForm";
import InspirationList from "./components/InspirationList";

function App() {
  return (
    <div className="App">
      <h1>MindFuel Tracker</h1>
      <AddInspirationForm onAdded={() => window.location.reload()} />
      <InspirationList />
    </div>
  );
}

export default App;
