import { useState } from "react";

function Home() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
            <h1>Bruna, eu amo você. Se você também me ama, dê uma risadinha! 😎</h1>
            {!clicked ? (
                <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
                    😄 Hehehe
                </button>
            ) : (
                <h2>Sabia que você me ama! Ansioso pela nossa viagem logo. 💘</h2>
            )}
        </div>
    );
}

export default Home;