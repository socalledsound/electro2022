import React, { useState, useEffect } from 'react'
import MarkdownView from 'react-showdown';
import boilerplateMarkdown from './BOILERPLATE.md'
import styles from './Syllabus.module.css'
const BoilerPlate = () => {

    const [bp, setBoilerPlate ] = useState(null)

    useEffect(() => {
        console.log(boilerplateMarkdown)
        fetch(boilerplateMarkdown)
        .then(resp => resp.text())
        .then(text => setBoilerPlate(text))   
    })


    return ( 
        <div className={styles.boilerplateContainer}>
            <div className={styles.boilerplateContent}>
                {
                
                bp &&
                    <MarkdownView 
                    markdown={bp}
                    options={{ tables: true, emoji: true }}
                    className={styles.markdown}
                    />
                }
            </div>
        </div>
     );
}
 
export default BoilerPlate;