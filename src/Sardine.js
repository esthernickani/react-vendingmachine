import { useNavigate } from "react-router-dom";

const Sardine = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <h2>This is a sardine</h2>
            <button onClick={goBack}>Back</button>
        </>
    )
}

export default Sardine;