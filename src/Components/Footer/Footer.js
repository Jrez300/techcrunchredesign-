import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <section className="footerContainer">
                    <div className="quickLinks">
                        <h3>About</h3>
                        <ul>
                            <li><a className="footer-nav" href="/">TechCrunch</a></li>
                            <li><a className="footer-nav" href="/events">Event</a></li>
                            <li><a className="footer-nav" href="/events">Advertise</a></li>
                            <li><a className="footer-nav" href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="quickLinks">
                        <h3>Legal</h3>
                        <ul>
                            <li><a className="footer-nav" href="https://www.verizonmedia.com/policies/xw/en/verizonmedia/privacy/intl/index.html">Private Policy</a></li>
                            <li><a className="footer-nav" href="https://www.verizonmedia.com/policies/xw/en/verizonmedia/terms/otos/index.html">Terms of Service</a></li>
                            <li><a className="footer-nav" href="https://techcrunch.com/pages/extra-crunch-terms-of-service/">Extra Crunch Terms</a></li>
                            <li><a className="footer-nav" href="https://www.verizonmedia.com/policies/us/en/verizonmedia/privacy/dashboard/index.html">Privacy dashboard</a></li>
                            <li><a className="footer-nav" href="https://techcrunch.com/pages/code-of-conduct/">Code of Conduct</a></li>
                        </ul>
                    </div>
                    <div class="quickLinks">
                        <h3>Read Anywhere</h3>
                        <ul>
                            <li><a className="footer-nav" href="https://apps.apple.com/us/app/techcrunch/id526058642">App Store</a></li>
                            <li><a className="footer-nav" href="https://play.google.com/store/apps/details?id=com.aol.mobile.techcrunch">Google Play</a></li>
                        </ul>
                    </div>
                    <div class="quickLinks">
                        <h3>International</h3>
                        <ul>
                            <li><a className="footer-nav" href="https://jp.techcrunch.com/?_ga=2.12138807.24557200.1593436256-944818732.1592413903">Japan</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/"><img className="socialmedia" src="img/facebooklogo.webp"
                            alt="facebook logo" /></a>
                        <a href="https://youtube.com/"><img className="socialmedia" src="img/youtubelogo.webp"
                            alt="youtube logo" /></a>
                        <a href="https://linkedin.com/"><img className="socialmedia" src="img/linkedinlogo.webp"
                            alt="linkedin logo" /></a>
                        <a href="https://twitter.com/"><img className="socialmedia" src="img/twitterlogo.webp"
                            alt="twitter logo" /></a>
                        <a href="https://www.instagram.com/"><img className="socialmedia" src="img/instagramlogo.webp"
                            alt="instagram logo" /></a>
                    </div>
                </section>
                <div className="copyright">
                    <p>&copy; 2013-2020 Verizon Media.All rights reserved.Powered by WordPress VIP.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;