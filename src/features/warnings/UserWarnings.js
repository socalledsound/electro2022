import React from 'react'

const UserWarnings = ({warnings}) => {
    return ( 
        <div style={{color: 'red'}}>
            {warnings}
        </div>
     );
}
 
export default UserWarnings;