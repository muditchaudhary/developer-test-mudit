import './Membercomponent.css';
import React, { Component } from 'react';

class Box2 extends Component{
    render(){
        return(
            <div class='box' id='Summary'>
                <h1>Request Summary</h1>
                <hr></hr>
                <div id='summaryTable'>
                    <div class='summaryText'>Plan Type</div>
                    <div class='summaryText'>Duration</div>
                    <div class='summaryText'>Payment Information</div>
                    <div class='summaryText'>Add Quota</div>
                    <div class='summaryText' id='yes'>Yes</div>
                </div>
                <hr id='bottom'></hr>
                <div id='total'>
                    <div  id='totalText'>Total</div>
                    <div  id='totalAmount'>Unknown</div>
                </div>
            </div>
        )
    }
}

export default Box2;