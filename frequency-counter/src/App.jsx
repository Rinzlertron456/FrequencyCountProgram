// import React,{ useState}  from 'react'
//
// function App() {
//     const [input, setinput] = useState("");
//     const [frequencies, setFrequencies] = useState([]);
//     const handleChange = (e) => {
//         setinput(e.target.value);
//         console.log("input: "+input);
//     }
//     const countFrequency = () => {
//         //BruteForce Solution
//         const words=input.split(" ");
//         // for (let i = 0; i < words.length; i++) {
//         //     let word = words[i];
//         //     for (let j = 0; j < word.length; j++) {
//         //         let ch = word.charAt(j);
//         //         if(frequencies[ch]) {
//         //             frequencies[ch]++;
//         //         }
//         //         else {
//         //             frequencies[ch] = 1;
//         //         }
//         //     }
//         // }
//         // Optimized solution
//
//         words.forEach(word => {
//             word.split('').forEach(ch => {
//                 let result=[...frequencies];
//                 let found = result.find(item => item.letter === ch);
//                 if (found) {
//                     found.frequency++;
//                 } else {
//                     result.push({ letter: ch, frequency: 1 });
//                 }
//                 setFrequencies(result);
//             });
//         });
//
//     }
//     const handleClick = () => {
//         countFrequency();
//         console.log(frequencies);
//     }
//     return (
//     <div className="container">
//         <input type="text" placeholder="Enter input Here" onChange={(e)=>handleChange(e)}/>
//         <button onClick={()=>handleClick()}>Display Frequency Count</button>
//         {frequencies.map((frequency,index)=>{
//             return (
//                 <div key={index}>
//                     <p>{frequency.letter}</p>
//                     <p>{frequency.frequency}</p>
//                 </div>
//             )
//         })}
//     </div>
//     )
// }
//
// export default App
import React, { useState } from 'react';
import axios from 'axios'


function App() {
    const [input, setInput] = useState("");
    const [frequencies, setFrequencies] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

    //FrontEnd Logic
    // const countFrequency = () => {
    //     const words = input.split(" ");
    //     const result = [];
    //
    //     words.forEach(word => {
    //         word.split('').forEach(ch => {
    //             let found = result.find(item => item.letter === ch);
    //             if (found) {
    //                 found.frequency++;
    //             } else {
    //                 result.push({ letter: ch, frequency: 1 });
    //             }
    //         });
    //     });
    //
    //     setFrequencies(result);
    // }

    const handleClick = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/input", {input: input});
        setInput("");
        const response = await axios.get("http://localhost:8080/inputs");
        setFrequencies(response.data);
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleClick(e)}>
                <input type="text" placeholder="Enter input Here" onChange={(e) => handleChange(e)}/>
                <button type="submit">Display Frequency Count</button>
            </form>
            {frequencies.map((frequency, index) => (
                <div key={index}>
                    <p>{frequency.letter}: {frequency.frequency}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
