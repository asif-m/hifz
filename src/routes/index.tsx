// @refresh reload
import { createSignal } from "solid-js";

export default function Index() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <h1>Home Page</h1>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
    </main>
  );
}
