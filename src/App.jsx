import "./App.css";
import UseDeferredValueExample from "./hooks/UseDeferredValueExample";
import UseIdExample from "./hooks/useId";

function App() {
  return (
    <div className="App space-y-8">
      <UseIdExample />
      <UseDeferredValueExample />
    </div>
  );
}

export default App;
