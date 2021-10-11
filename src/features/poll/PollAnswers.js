import styles from './Poll.module.css'

const PollAnswers = ({currentQuestion, pollAnswers}) => {
    const pollAnswersTotals = pollAnswers.reduce((acc, cur) => {
        return 3
    }, [])
    return ( 
        <div class={styles.pollAnswersWrapper}>
            
                
                    
                        <div>
                            <div>
                                <p>{currentQuestion.question}</p>
                            </div>
                            <div>
                            {
                                currentQuestion.answers.map((answer, idx) => {
                                    return (
                                        <div>
                                            <p>{answer}</p>
                                            <div 
                                                className={styles.answer}
                                                style={{
                                                    backgroundColor: 'red',
                                                    width: pollAnswersTotals[idx] * 10
                                                }}
                                            ></div>
                                        </div>
                                    )
                                })
                            }
                            </div>

                        </div>
        </div>
     );
}
 
export default PollAnswers;