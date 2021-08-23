import React from 'react'

const UserSettings = ({user}) => {
    return ( 
        <div>
            {user.displayName}
        </div>
     );
}
 
export default UserSettings;