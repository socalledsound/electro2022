import styles from './Poll.module.css'

const PollAnswers = ({currentQuestion, pollAnswers}) => {
    const pollAnswersTotals = pollAnswers.reduce((acc, cur) => {
        const idx = cur.answerId
        acc[idx] = acc[idx] + 1
        return acc
    }, [0,4,0])
    console.log(pollAnswersTotals)
    // const pollAnswersTotals = [10,5,5]
    // console.log()
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
                                                    width: `${pollAnswersTotals[idx] > 0 ? pollAnswersTotals[idx] * 30 : 0}px`
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