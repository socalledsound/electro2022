import { useState } from 'react';

export default function useForm(initialState = {}, validate, onSubmit) {
    const [formData, setFormData] = useState(initialState);
    const [errors, updateErrors] = useState({})

    const resetForm = () => {
        setFormData(initialState)
    }
    
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        
    }
    const handleSubmit = (e) => {
        console.log(formData)
        e.preventDefault();
        updateErrors(validate(formData))
        onSubmit?.(formData);
    }
    return { formData, errors, handleInputChange, handleSubmit, resetForm }    
}