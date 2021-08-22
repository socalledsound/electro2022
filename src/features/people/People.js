import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux';
import { randomizeArray } from '../../utils/utils'
import { selectAllPeople } from './peopleSlice';
import styles from './People.module.css'
import PersonAvatar from './PersonAvatar';
import PersonDetail from './PersonDetail'
const People = () => {

    const people = useSelector(selectAllPeople)
    const [ selectedPerson, selectPerson ]= useState(null)
    const randPeople = useMemo(() => {
      return randomizeArray(people)
    }, [people])

    return ( 

       <div className={styles.peopleWrapper}>
         
         {
           
            randPeople.map(person => {
              const selected = selectedPerson && selectedPerson.id === person.id
              return (
                <div 
                  key={person.id}
                  className={styles.personContainer}
                  onClick={() => selectPerson(person)}
                  style={{width: `${selected ? '20rem' : '7rem'}`, height: `${selected ? '20rem' : '7rem'}`}}
                >
                  {
                    selected ?
                      <PersonDetail person={person}/>
                    :
                      <PersonAvatar person={person}/>
                  }
                  
                </div>
              )
            })
          }
        </div>
       
     );
}
 
export default People;
