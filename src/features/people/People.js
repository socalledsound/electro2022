import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { randomizeArray } from '../../utils/utils'
import { selectAllPeople, startSyncUsers } from './peopleSlice';
import styles from './People.module.css'
import PersonAvatar from './PersonAvatar';
import PersonDetail from './PersonDetail'
// import { updateUserSuccess } from '../user/userSlice';
const People = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(startSyncUsers())
}, [dispatch])

  // useEffect(() => {
  //   const usersFromRedux = useSelector(selectAllPeople())
  //   updateUsers(usersFromRedux)
  // }, [useSelector, updateUsers])

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
                  style={{width: `${selected ? '7rem' : '7rem'}`, height: `${selected ? '7rem' : '7rem'}`}}
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
