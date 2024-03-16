import { useNavigate } from "react-router-dom";

const Sprite = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <h2>This is a sprite</h2>
            <button onClick={goBack}>Back</button>
        </>
    )
}

export default Sprite;