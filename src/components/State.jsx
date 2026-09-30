import React, { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const [tak, setTak] = useState(0);

    const Sum = () => {
        console.log("Hello people welcome to form me!");
        setCount(count + 1);

    };


    console.log(count);

    return (
        <div>
            <h1>Result: {count}</h1>

            <button onClick={Sum} className=" rotate-2 border-t-cyan-200 bg-green-700 ">
                Click
            </button>
        </div>
    );
};

export default State;