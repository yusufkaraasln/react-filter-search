import "./app.css";
import { useState } from "react";
import Table from "./Table";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(()=>{

      const fetchUsers = async () => {
        const res = await axios.get("http://localhost:8080/?search="+query);
        setData(res.data);
      }

      if (query.length === 0 || query.length>2) {
        fetchUsers();
      }

  },[query])  
 

  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search anything..."
        className="search"
      />
      <Table data={data} />
    </div>
  );
}

export default App;
