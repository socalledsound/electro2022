import React from 'react'
import './TextArea.css'

const TextArea = ({onChange, error, ...rest}) => {

    return (
        <div className="input-container">
            <textarea  
                className={`text-area ${error ? 'text-input-error' : ''}`} 
                onChange={(e) => onChange(e) }
                {...rest}
            />
            {error && 
            <p className='error-text'>{error}</p>
                }
        </div>

    )

}

export default TextArea