import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header'

const App = () => {
    // const name = "Brand"


    useEffect(()=>{
            const axiosTask = async()=>{
                const res = await axios({
                    method: 'get',
                    url: 'http://localhost:8080/search',
                    params:{
                        quary:'dinner'
                    },
                    headers: {
                        Authorization: 'Bearer pvwAzDkoQqbsC8dzksa9R3ScsLuerrVw8b3RC0YuAVPJnasUdK3CLCgWyFEIH1wFS2iqW1Ykx3z1wFGaYGgHyxhiJ4dVvTrgg5Kqr-yl3ju7fpm3OrkdjefoGj9jY3Yx'
                    }
                })

                console.log(res)
            }
            axiosTask()
        }
    )
    return (
        <div>

        </div>
    );
}

export default App;
