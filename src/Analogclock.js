import React from 'react';

function Analogclock(props){
    
let ourTime = new Date(props.time);

console.log(props.tme);

var clockContainer = {
    position : 'relative',
    top: 0,
    left:0,
    width:200,
    height:200,
    borderRadius:20000,
    borderStyle:'solid',
    borderColor:'Black'
};

var secondHand = {
    position:'relative',
    top:100,
    left:100,
    border:'1px solid red',
    width:'40%',
    height:1,
    transform:'rotate('+((ourTime.getSeconds()/60)*360 - 90).toString()+'deg)',
    transformOrigin:'0% 0%',
    backgroundColor:'red'
};

var minuteHand = {
    position:'relative',
    top:100,
    left:100,
    border:'1px solid red',
    width:'40%',
    height:3,
    transform:'rotate('+((ourTime.getMinutes()/60)*360 - 90).toString()+'deg)',
    transformOrigin:'0% 0%',
    backgroundColor:'grey'
};

var hourHand = {
    position:'relative',
    top:89,
    left:102,
    border:'1px solid red',
    width:'30%',
    height:7,
    transform:'rotate('+((ourTime.getHours()/60)*360).toString()+'deg)',
    transformOrigin:'0% 0%',
    backgroundColor:'grey'
};

  

    return (
        <div style={clockContainer}>
            <div style={secondHand}></div>
            <div style={minuteHand}></div>
            <div style={hourHand}></div>
        </div>
    )
}

export default Analogclock;