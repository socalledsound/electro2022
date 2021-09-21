import { Link } from 'react-router-dom'

const NoCurrentUser = () => {
    return ( 
        <div>
           it looks like there's been an error.
           please 
           <Link to='/'>log in</Link>
           again if you aren't currently logged in
        </div>
     );
}
 
export default NoCurrentUser;