import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_QUESTIONS } from "../features/questions/questionSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
            .then((res) => res.json())
            .then((data) => {
                dispatch(GET_QUESTIONS(data.results))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [dispatch])


    
    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() => navigate("/question")}>Start Quiz</button>
        </div>
    );
};

export default Home;