import React from 'react';

class EventsAdvertise extends React.Component {
    render() {
        return (
            <div>
                <div className="hero-image" />
                <div className="hero-text">
                    <h1>Branded Content. Digital Media. Events.</h1>
                    <p>TechCrunch offers partners an unsurpassed platform to reach passionate tech audiences in person and
                    online. TechCrunch hosts events around the globe that combine digital media and live activations, as
                    well as many media-only specials centered on momentous tech events. We create influential content that
                    engages readers and establish brands as an industry thought leaders.</p>
                    <a href="/contact"><button>Contact Us</button></a>
                </div>
                <div className="advertise-container">
                    <h1 className="advertise-calendar">2020 Calendar</h1>
                    <img className="advertise-image" src="img/BREXEVENT.png" alt="a techcrunch disrupt event" />
                    <p className="advertise-list">
                        <li><span style={{ color: '#00A562' }}>Winter Party</span>: February 7</li>
                        <li><span style={{ color: '#00A562' }}>TC Sessions: Robotics + AI</span>: March 3</li>
                        <li><span style={{ color: '#00A562' }}>TC Sessions: Space</span>: June 25</li>
                        <li><span style={{ color: '#00A562' }}>TC Early Stage in San Francisco</span>: July 21</li>
                        <li><span style={{ color: '#00A562' }}>Disrupt in San Francisco</span>: September 14-16</li>
                        <li><span style={{ color: '#00A562' }}>TC Sessions: Mobility</span>: October 6</li>
                        <li><span style={{ color: '#00A562' }}>TC Early Stage in Paris</span>: October 28</li>
                        <li><span style={{ color: '#00A562' }}>TC Early Stage in New York</span>: December 1</li>
                    </p>
                    <a href="/contact"><button className="events-button">Contact Us</button></a>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="events-card">
                            <img src="img/eventstechcrunch.png" alt="Avatar" style={{ width: 100 + '%' }} />
                            <h2><b>Extra Crunch Live</b></h2>
                            <p>Jun 30, 2020</p>
                            <button className="events-card-button">Learn More</button><br />
                            <button className="events-card-button">Be a Sponsor</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/Early_Stage_Green_Background_466px.png" alt="Avatar" style={{ width: 100 + '%' }} />
                            <h2><b>TC Early Stage 2020</b></h2>
                            <p>Jul 21 - 22, 2020</p>
                            <button className="events-card-button">Buy Tickets</button><br />
                            <button className="events-card-button">Be a Sponsor</button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/Disrupt_Digital_2020_Key_Art_466px.jpg" alt="Avatar" style={{ width: 100 + '%' }} />
                            <h2><b>Disrupt 2020</b></h2>
                            <p>Sep 14 - 18, 2020</p>
                            <button className="events-card-button">Buy Tickets</button><br />
                            <button className="events-card-button">Be a Sponsor</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EventsAdvertise;