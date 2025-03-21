import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const SocialMedia = () => {
    return(
        <ul className="flex items-center space-x-3">
            <li>
                <a href="https://www.facebook.com/profile.php?id=100063717843118" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600">
                    <FaFacebookF />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/olimpogimnasia/" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@olimpoacademia" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 hover:bg-blue-600 hover:border-blue-600">
                    <FaYoutube />
                </a>
            </li>
        </ul>
    )
}
export default SocialMedia