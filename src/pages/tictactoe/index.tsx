import "./tictactoe.css";
import cirlce_icon from '../../assets/circle.png'
import cross_icon from '../../assets/cross.png'
import { useRef, useState } from "react";

let data = ["","","","","","","","",""];

const Tictactoe = () => {
  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let tittleRef =  useRef(null);

  const toggle = (e: any,num: number) => {
   if (lock){
    return 0;
   }
   if(count%2===0){
    e.target.innerHTML = `<img src='${cross_icon}'>`;
    data[num]="x";
    setCount(++count)
   }
   else{
    e.target.innerHTML = `<img src='${cirlce_icon}'>`;
    data[num]="o";
    setCount(++count)
   }
   checkWin();
  }

 const checkWin = () => {
   if(data[0]==data[1] && data[1]==data[2] && data[2]!=="")
   {
    won(data[2]);
   }
   else if(data[3]==data[4] && data[4]==data[5] && data[5]!=="")
   {
    won(data[5]);
   }
   else if(data[6]==data[7] && data[7]==data[8] && data[8]!=="")
    {
     won(data[8]);
    }
  else if(data[0]==data[3] && data[3]==data[6] && data[6]!=="")
      {
       won(data[6]);
      }

  else if(data[3]==data[4] && data[4]==data[7] && data[7]!=="")
        {
         won(data[7]);
        }

   else if(data[2]==data[5] && data[5]==data[8] && data[8]!=="")
          {
           won(data[8]);
          }
   else if(data[8]==data[4] && data[4]==data[8] && data[8]!=="")
            {
             won(data[8]);
            }
   else if(data[0]==data[1] && data[1]==data[2] && data[2]!=="")
   {
    won(data[2]);
   }
   else if(data[2]==data[4] && data[4]==data[6] && data[6]!=="")
    {
     won(data[6]);
    }
  }

  const won = (winner: any) => {
    setLock(true)
    if(winner==="x")
    {
      //@ts-ignore
      tittleRef.current.innerHTML = `Congratulations:<img src=${cross_icon}>`;
    }
    else
    {
      //@ts-ignore
      tittleRef.current.innerHTML = `Congratulations:<img src=${cirlce_icon}>`;
    }
  }

  return <div className='container'>
    <h1 className="title" ref={tittleRef}>Tic Tac Toe Game In <span>React</span></h1>
    <div className="board">
   <div className="row1">
   <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
   <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
   <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
   </div>
   <div className="row2">
   <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
   <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
   <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
   </div>
   <div className="row3">
   <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
   <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
   <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
   </div>
    </div>
    <button className="reset">Reset</button>
  </div>;
};

export default Tictactoe;


