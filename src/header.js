import React, {Component} from 'react';
import './headerfooter.css';
import logo from './logo.png';
import search from './search.png';
import newsfeed from './newsfeed.png';
import oppurtunity from './oppurtunity.png';
import Updates from './Updates.png';
import connections from './connections.png';
import messages from './messages.png';
import line from './Line 5.svg';
import profilepic from './profilepic.png';
import arrow from './arrow.svg';

class Header extends Component {

    render(){
        return(
            <div class='Header-box'>
                <img class='logo' src={logo}></img>
                <div class='Search-box'>
                    <div id="Search-text">Search GoTalents</div>
                    <div id='Search-button'><img class='Search-logo' src={search}></img></div>
                </div>
                <div id='bar'>
                        <div class='bar-button'>
                            <img class='bar-image' src={newsfeed}></img>
                            <div class='bar-text'>Newsfeed</div>
                        </div>
                        <div class='bar-button'>
                            <img class='bar-image' src={oppurtunity}></img>
                            <div class='bar-text'>Oppurtunity</div>
                        </div>
                        <div class='bar-button'>
                            <img class='bar-image' src={Updates}></img>
                            <div class='bar-text'>Updates</div>
                        </div> 
                        <div class='bar-button'>
                            <img class='bar-image' src={connections}></img>
                            <div class='bar-text'>Connections</div>
                        </div>
                        <div class='bar-button'>
                        <img class='bar-image' src={messages}></img>
                        <div class='bar-text'>Messages</div>
                        </div>
                        <img id='vertical-line' src={line}></img>
                </div>
                <div id='profile'>
                    <div id='circleborder'>
                        <img id='profilepic' src={profilepic}></img>
                    </div>
                    <div>
                        <div id='profile-text'>Me</div>
                        <img id='arrow' src={arrow}></img>
                    </div>
                </div>
                
            </div>
        )
    }
};



export default Header;