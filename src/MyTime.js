import {format} from 'date-fns'

function MyTime() {
    function getTime() {
        const now = new Date();
        return format(now, 'HH:mm:ss');
    }

    return (
        <div>
            {getTime()}
        </div>
    );
}

export default MyTime;