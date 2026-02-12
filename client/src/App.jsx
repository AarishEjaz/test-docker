// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const callApi = async () => {
    setError("");
    setData("");
    try {
      const apiBase =
        import.meta.env.VITE_API_URL ||
        `http://${window.location.hostname}:5001`;
      const res = await fetch(`${apiBase}/api`);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const json = await res.json();
      setData(json.message);
    } catch (err) {
      setError(err.message || "Failed to reach backend");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + Vite + Docker 🐳</h1>
      <button onClick={callApi}>Call Backend</button>
      <p>{data}</p>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default App;
