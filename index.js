import React from 'react'
function home() {
    const ListItems = [1, 2, 3, 4]

    const addItem = () => {
        const variableA = 1;
        const variableB = 3;
        const variableC = 2;
        return variableA * 3 + variableB * variableC
    }
    return (
        <><div>Home</div>
        <p>hello world for everybody</p>
        <button on onClick={addItem}/></>
    )
}
export default home 