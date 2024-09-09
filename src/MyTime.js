import {format} from 'date-fns'
import './MyTime.css'
import {useState, useEffect} from 'react';
import {toZonedTime} from 'date-fns-tz';

function MyTime() {
    // ステートを定義
    const [now, setNow] = useState(getTime());

    useEffect(() => {
        const timerid = setInterval(() => {
            // 一定時間ごとに実行する処理
            setNow (getTime());
        }, 1000);

        // タイマーを解放する関数を返す
        return () => {
            clearTimeout(timerid);
        };
    }, []);
    function getTime() {
//        const now = new Date();
        const now = toZonedTime(new Date(), 'America/New_York');
        return format(now, 'HH:mm:ss');
    }

    return (
        <div className="time">
            {now}
        </div>
    );
}

export default MyTime;