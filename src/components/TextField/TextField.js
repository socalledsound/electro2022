import React from 'react'
import './TextField.css'

const TextField = ({onChange, error, ...rest}) => {

    return (
        <div className="input-container">
            <input 
                className={`text-input ${error ? 'text-input-error' : ''}`} 
                onChange={(e) => onChange(e) }
                {...rest}
            />
            {error && 
            <p className='error-text'>{error}</p>
                }
        </div>

    )

}

export default TextField