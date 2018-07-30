import React, {Component} from 'react';
import './headerfooter.css';
import logo from './logo.png';
import flag from './united-states.png';

class Footer extends Component{
    render(){
        return(
            <div class='Footer-box'>
                <div id='box1'>
                    <div id='sitemap'>
                        <div class='site-button'>ABOUT</div>
                        <div class='site-button'>PRESS</div>
                        <div class='site-button'>BLOG</div>
                        <div class='site-button'>CAREER</div>
                        <div class='site-button'>CONTACT</div>
                        <div class='site-button' id='last'>HELP</div>
                    </div>
                </div>
                <hr id='footer-line'></hr>
                <div id= 'box2'>
                    <img class='logo-foot' src={logo}></img>
                    <div id='copyright'>© 2018</div>
                    <div id='Misc'>
                        <div class='misc-button'>User Agreement</div>
                        <div class='misc-button'>Privacy Policy</div>
                        <div class='misc-button'>Cookie Policy</div>
                        <div class='misc-button'>Copyright Policy</div>
                    </div>
                    <img id='language' src={flag}></img>
                    <div id='language-text'>English</div>

                </div>

            </div>
        )
    }
  
};


export default Footer;