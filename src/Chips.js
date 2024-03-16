import { useNavigate } from "react-router-dom";

const Chips = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <h2>This is a chip</h2>
            <button onClick={goBack}>Back</button>
        </>
    )
}

export default Chips;