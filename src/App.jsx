import "./App.css";
import UseIdExample from "./examples/UseIdExample";
import UseDeferredValueExample from "./examples/UseDeferredValueExample";
import UseInsertionEffectExample from "./examples/UseInsertionEffectExample";
import UseSyncExternalStoreExample from "./examples/UseSyncExternalStoreExample";
import UseTransitionExample from "./examples/useTransitionExample";

function App() {
  return (
    <div className="App space-y-16">
      <UseIdExample />
      <UseDeferredValueExample />
      <UseTransitionExample />
      <UseSyncExternalStoreExample />
      <UseInsertionEffectExample />
    </div>
  );
}

export default App;
