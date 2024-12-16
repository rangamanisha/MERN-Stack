import {Link} from 'react-router-dom'
export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    //the Link component helps to prevent relaoding the page
                <Link to = '/'>Home</Link></li>
                <li><Link to = '/about'>About</Link></li>
                <li><Link to = '/articles'>Artciles</Link></li>
            </ul>
        </nav>
    )
}