import { useState } from 'react';
import { format } from 'date-fns';

export default function Home() {
  const [count, setCount] = useState(0);
  const today = format(new Date(), 'EEEE, MMMM d, yyyy');

  return (
    <section>
      <h1>Demo Project</h1>
      <p>Today is {today}.</p>
      <div className="card">
        <p>You clicked the button {count} times.</p>
        <button onClick={() => setCount((c) => c + 1)}>Click me</button>
      </div>
    </section>
  );
}
