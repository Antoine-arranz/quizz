import React from 'react'


type Props = {
    questions: string;
    answers: string[];
    callback:any;
    userAnswer:boolean;
    questionNumber : number;
    totalQuestions : number;
}

//c'est une foncion de nombre components avec FC
const QuestCard: React.FC<Props> = ({questions, answers, callback, userAnswer,questionNumber, totalQuestions}) =>
 (<div>
     <p className='number'>
          Question:{questionNumber} / {totalQuestions}
          </p>
        <p> dangerouslySetInnerHTML={{__html : questions}}</p>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html:answer}}></span>
                    </button>
                </div>
            ))}
        </div>
          </div>)


export default QuestCard