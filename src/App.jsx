import "./App.css";
import UseDeferredValueExample from "./examples/UseDeferredValueExample";
import UseIdExample from "./examples/useId";
import UseSyncExternalStoreExample from "./examples/UseSyncExternalStoreExample";

function App() {
  return (
    <div className="App space-y-8">
      <UseSyncExternalStoreExample />
      <UseIdExample />
      <UseDeferredValueExample />
    </div>
  );
}

export default App;
