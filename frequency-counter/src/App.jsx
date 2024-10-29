import React,{ useState}  from 'react'

function App() {
    const [string, setString] = useState("");
    const handleChange = (e) => {
        setString(e.target.value);
    }
    return (
    <div className="container">
        <input type="text" placeholder="Enter String Here" onChange={(e)=>handleChange(e)}/>
        <button>Display Frequency Count</button>
    </div>
    )
}

export default App
