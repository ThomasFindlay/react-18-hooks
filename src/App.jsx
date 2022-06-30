import "./App.css";
import UseDeferredValueExample from "./examples/UseDeferredValueExample";
import UseIdExample from "./examples/useId";
import UseInsertionEffectExample from "./examples/useInsertionEffect";
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
