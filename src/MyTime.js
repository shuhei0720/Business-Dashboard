import {format} from 'date-fns'
import './MyTime.css'

function MyTime() {
    function getTime() {
        const now = new Date();
        return format(now, 'HH:mm:ss');
    }

    return (
        <div className="time">
            {getTime()}
        </div>
    );
}

export default MyTime;