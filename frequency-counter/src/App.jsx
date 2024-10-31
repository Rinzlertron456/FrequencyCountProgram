// import React,{ useState}  from 'react'
//
// function App() {
//     const [string, setString] = useState("");
//     const [frequencies, setFrequencies] = useState([]);
//     const handleChange = (e) => {
//         setString(e.target.value);
//         console.log("String: "+string);
//     }
//     const countFrequency = () => {
//         //BruteForce Solution
//         const words=string.split(" ");
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
//         <input type="text" placeholder="Enter String Here" onChange={(e)=>handleChange(e)}/>
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

function App() {
    const [string, setString] = useState("");
    const [frequencies, setFrequencies] = useState([]);

    const handleChange = (e) => {
        setString(e.target.value);
    }

    const countFrequency = () => {
        const words = string.split(" ");
        const result = [];

        words.forEach(word => {
            word.split('').forEach(ch => {
                let found = result.find(item => item.letter === ch);
                if (found) {
                    found.frequency++;
                } else {
                    result.push({ letter: ch, frequency: 1 });
                }
            });
        });

        setFrequencies(result);
    }

    const handleClick = () => {
        countFrequency();

    }

    return (
        <div className="container">
            <input type="text" placeholder="Enter String Here" onChange={handleChange} />
            <button onClick={handleClick}>Display Frequency Count</button>
            {frequencies.map((frequency, index) => (
                <div key={index}>
                    <p>{frequency.letter}: {frequency.frequency}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
