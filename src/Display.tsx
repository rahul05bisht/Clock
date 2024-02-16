import { FaPause, FaPlay, FaUndo } from "react-icons/fa";
import { DisplayState, formatTime } from "./helper";

interface DisplayProps {
    displayState :DisplayState;
    reset : () => void;
    startStop : (displayState :DisplayState) => void;
}

const Display :React.FC<DisplayProps>  =({
    displayState,
    reset,
    startStop,
}) => {
    return (
        <div className="display">
            <h3 id="timer-label">{displayState.timeType}</h3>
             <span id="time-left" style={{color: `${displayState.timerRunning ? "red" :"white"}`, fontSize:`30px`,fontWeight:`bold` }}>
                {formatTime(displayState.time)}
                </span>
                <div>
                    <button id ="start_stop" onClick={()=> startStop(displayState)}>{displayState.timerRunning ? <FaPause/> :<FaPlay/>
                    }
                    </button>
                    <button id="reset" onClick={reset}>
                        <FaUndo/>

                    </button>
                </div>
        </div>
    );
};
export default Display;