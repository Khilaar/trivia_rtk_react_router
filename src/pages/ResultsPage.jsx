import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_ANSWERS } from '../features/answers/answerSlice';

const ResultsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answersList = useSelector((state) => state.answers.answersList);
  const questionList = useSelector((state) => state.questions.questionList);

  const handleRestart = () => {
    dispatch(RESET_ANSWERS());
    navigate('/');
  };

  let correctAnswers = 0; 

  return (
    <div>
      <h2>Results Page</h2>
      {answersList.map((ans, index) => {
        const question = questionList[index]; 

        if (ans.isCorrect) {
          correctAnswers++;
        }

        return (
          <div key={`answer_${index}`}>
            <p>
              Question: <span dangerouslySetInnerHTML={{ __html: question.question }} />
            </p>
            <p className={ans.isCorrect ? 'correct-answer' : 'incorrect-answer'}>
              Answer: <span dangerouslySetInnerHTML={{ __html: ans.answer }} />
            </p>
          </div>
        );
      })}

      <p className='result'>Total Correct Answers: {correctAnswers}</p> 
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default ResultsPage;