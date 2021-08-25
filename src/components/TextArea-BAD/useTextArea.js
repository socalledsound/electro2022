import { useState } from 'react';

export default function useTextArea(initialState = {}, onSubmit, validate) {
    const [formData, setFormData] = useState(initialState);
    const [errors, updateErrors] = useState({})

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateErrors(validate(formData))
        onSubmit?.(formData);
    }
    return { formData, errors, handleInputChange, handleSubmit }    
}