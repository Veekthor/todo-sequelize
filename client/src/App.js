import {useEffect, useState} from "react";
function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const initCall = async () => {
      try {
        const res = await fetch("/api");
        const data = await res.json();
        setData(data);
      } catch (error) {
        alert("Something went wrong");
        console.error(error);
      }
    }
    initCall();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi mom</h1>
      </header>
      <p>
        Health: {data?.health}
      </p>
    </div>
  );
}

export default App;
