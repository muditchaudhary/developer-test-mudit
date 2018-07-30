import React, { Component } from 'react';
import './Membercomponent.css';
import planA from './PlanA.svg';
import planB from './planB.svg';
import planC from './planC.svg';
import planD from './planD.svg';

class Box1 extends Component {

    render() {
        return(
            <div class='box' id='selectPlan'>
                <h1>Become Premium Member</h1>
                <hr></hr>
                <h2 class='Select'>Membership type</h2>
                <p class='text' id='one'>Explore and choose a plan that best helps your creative journey</p>
                <div class='plans'>
                    <div class='planButton'>
                            <img id='planImage'src={planA}></img>
                            <div id='planHead'>Plan A</div>
                            <div id='planTitle'>Build Your Creative Career</div>
                            <div id='planDeet'>Made for talented individuals and groups seeking employment</div>
                        </div>
                        <div class='planButton'>
                            <img id='planImage'src={planB}></img>
                            <div id='planHead'>Plan B</div>
                            <div id='planTitle'>Launch Your Creative Project</div>
                            <div id='planDeet'>Made for talents seeking collaboration and entrepreneurship</div>
                        </div>
                        <div class='planButton'>
                            <img id='planImage'src={planC}></img>
                            <div id='planHead'>Plan C</div>
                            <div id='planTitle'>Hire Creative Professionals</div>
                            <div id='planDeet'>Made for small-medium businesses seeking recruitment</div>
                        </div>
                        <div class='planButton'>
                            <img id='planImage'src={planD}></img>
                            <div id='planHead'>Plan D</div>
                            <div id='planTitle'>Hire Creative Professionals</div>
                            <div id='planDeet'>Made for larger companies seeking large-scale recruitment</div>
                        </div>
                </div>
            </div>
        )
    }
};



export default Box1;