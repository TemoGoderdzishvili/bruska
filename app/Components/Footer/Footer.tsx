import styles from "./Footer.module.css"

import {
    FaTiktok,
    FaMapMarker,
    FaFacebook,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
                    <footer className={styles.footer}>
            <div className={styles.contact}>
                <h5>Contact Info</h5>
                <p><FaMapMarker className={styles.icon} />
                    ხომლის ქუჩა 32/1</p>
            </div>

            <div className={styles.media}>
                <h5>Social Media & Legal</h5>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=61593738475040&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} color="blue" style={{ height: '25px', width: '25px' }} /></a>

                    <a href="https://www.instagram.com/bruska_onlinebakery/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} color="#E4405F" style={{ marginLeft: '50px', height: '25px', width: '25px' }} /></a>
                    <a href="https://www.tiktok.com/@bruska_bakery?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafRBmUprM5WeZrHdKY98AkooFOGZLzS2rUJsud9lIMkdzkkFTPnh5uFk2wPTg_aem_5hEAbg2HDf4bvqNJV34kQg"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaTiktok className={styles.icon} color="#000000" style={{ marginLeft: '50px', height: '25px', width: '25px' }} /></a>
                </div>
                <p>© Bruska</p>
                <p>All rights reserved</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer