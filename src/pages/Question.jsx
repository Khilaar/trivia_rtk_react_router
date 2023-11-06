import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { GET_ANSWERS } from "../features/answers/answerSlice";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let id = 0;

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const QuestionPage = () => {
    const questionList = useSelector(state => state.questions.questionList);
    const answerList = useSelector(state => state.answers.answersList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const generateUniqueId = () => {
        id += 1;
        return id;
    };

    useEffect(() => {
        if (answerList.length > currentQuestionIndex) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }, [answerList, currentQuestionIndex]);

    const renderQuestion = (question) => {
        const shuffledAnswers = shuffleArray([
            question.correct_answer,
            ...question.incorrect_answers,
        ]);

        return (
            <div key={question.question}>
                <h2>Here is the question:</h2>
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
                <p>Possible answers:</p>
                <div className="possibleAnswers">
                    {shuffledAnswers.map((answer) => {
                        const uniqueId = generateUniqueId();
                        return (
                            <button
                                key={uniqueId}
                                onClick={() => {
                                    if (answer === question.correct_answer) {
                                        dispatch(GET_ANSWERS({ answer, isCorrect: true }));
                                    } else {
                                        dispatch(GET_ANSWERS({ answer, isCorrect: false }));
                                    }
                                }}
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    if (questionList.length > 0 && currentQuestionIndex < questionList.length) {
        return renderQuestion(questionList[currentQuestionIndex]);
    } else {
        navigate('/results');
        return null;
    }
};

export default QuestionPage;