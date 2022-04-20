import SuspenseExample from "./SuspenseExample";
import UseIdExample from "./UseIdExample";
import BatchingExample from "./BatchingExample";
import FlushSyncExample from "./FlushSyncExample";
import ConcurrentExample from "./ConcurrentExample";

export const App = () => (
  <div>
    <SuspenseExample />
    <UseIdExample />
    <BatchingExample />
    <FlushSyncExample />
    <ConcurrentExample />
  </div>
);
