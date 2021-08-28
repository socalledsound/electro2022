import { useState } from 'react';

export default function useForm(initialState = {}, validate, onSubmit) {
    const [formData, setFormData] = useState(initialState);
    const [errors, updateErrors] = useState({})
    // const [ isSubmitting, setIsSubmitting ] = useState(false)

    // useEffect(() => {
    //     if(Object.keys(errors).length === 0 && isSubmitting){
    //         login()
    //     }
    // }, [errors, isSubmitting, login])

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