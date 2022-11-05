import { useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';


const App = () => {
    useEffect(() => {
        const axiosTask = async () => {
            const res = await axios({
                method: 'get',
                url: 'http://localhost:8081/search',
                params: {
                    term:'dinner',
                    location:'New York City',
                    limit:3,
                },
                headers: {
                    Authorization:
                        'Bearer pvwAzDkoQqbsC8dzksa9R3ScsLuerrVw8b3RC0YuAVPJnasUdK3CLCgWyFEIH1wFS2iqW1Ykx3z1wFGaYGgHyxhiJ4dVvTrgg5Kqr-yl3ju7fpm3OrkdjefoGj9jY3Yx',
                },
            })
            // console.log(res)
        }
        axiosTask()
    })
    return (
        <div>
            <Form  />
        </div>
    );
}

export default App
