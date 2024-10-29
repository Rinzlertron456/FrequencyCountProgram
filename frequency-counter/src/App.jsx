import React,{ useState}  from 'react'

function App() {
    const [string, setString] = useState("");
    const [frequencies, setFrequencies] = useState(new Map([['key', 'value']]));
    const handleChange = (e) => {
        setString(e.target.value);
        console.log("String: "+string);
    }
    const countFrequency = () => {
        //BruteForce Solution
        const words=string.split(" ");
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            for (let j = 0; j < word.length; j++) {
                let ch = word.charAt(j);
                if(ch>='a'&&ch<='z'){

                }
            }
        }
        // Optimized solution
        // const frequencyMap = new Map();
        // const words = string.toLowerCase().split(" ");
        // for(let word of words){
        //     if(word!=""){
        //         frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
        //     }
        // }
        // setFrequency(Array.from(frequencyMap.entries()));
    }
    return (
    <div className="container">
        <input type="text" placeholder="Enter String Here" onChange={(e)=>handleChange(e)}/>
        <button>Display Frequency Count</button>
    </div>
    )
}

export default App
