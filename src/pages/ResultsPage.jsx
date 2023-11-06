import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_ANSWERS } from '../features/answers/answerSlice';

const ResultsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answersList = useSelector((state) => state.answers.answersList);

  console.log(answersList);

  const handleRestart = () => {
    dispatch(RESET_ANSWERS());
    navigate('/');
  };

  return (
    <div>
      <h2>Results Page</h2>
      {answersList.map((ans, index) => {
        return (
          <p
            key={`answer_${index}`}
            className={ans.isCorrect ? 'correct-answer' : 'incorrect-answer'}
          >
            Answer: {ans.answer}
          </p>
        );
      })}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default ResultsPage;