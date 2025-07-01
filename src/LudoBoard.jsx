import {useState} from "react";


export default  function Ludoboard() {


   // many statevaribales for every color

    // let {blueMove, setBlueMoove} = useState(0);
    // let {blueMove, setBlueMoove} = useState(0);
    // let {blueMove, setBlueMoove} = useState(0);
    // let {blueMove, setBlueMoove} = useState(0);
// to avoid this

    let [moves, setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    
    //we can use array as state variable

    let [arr,SetArr] = useState(["no moves"]);
    let updateBlue = () =>{ // function
       // moves.blue += 1;
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => { // callback
            
            return {...prevMoves, blue: prevMoves.blue + 1}; // change here only
        });

        arr.push("blue Moves");
        SetArr([...arr,"blue Mvoes"]); 
    };

    return(

        <>
        
            <p>Let the Game Begins...</p>
            <p>{arr}</p>
            <hr></hr>
            <br></br>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                {/* initial values */}
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1</button>
                <p>Red moves = {moves.red} </p>
                <button style={{backgroundColor: "red"}}>+1</button>
                <p>Yellow moves =  {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}}>+1</button>
            </div>
          
        
             

        </>
    )
};



