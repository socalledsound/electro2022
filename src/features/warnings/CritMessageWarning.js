import React from 'react'

const CritMessageWarning = ({warning}) => {
    console.log(warning)
    const { numMade, numNeeded } = warning
    return ( 
        <div>
            {numMade} of { numNeeded}
        </div>
     );
}
 
export default CritMessageWarning;