import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Featured.css'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'


const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false'

    useEffect(() =>{
        axios.get(url).then((response) =>{
            setData(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    },[]);

    // pra ver se tá vindo data :p
    console.log(data);

    if(!data) return null;

    return (<>
               
        <div className='flex flex-col justify-center flex-wrap pr-[5px] p-[10px]'>
            <div id='first-row-coins' className='flex'>
                {/* first coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[0].image} alt='/' id='img-coin' />
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[0].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[0].current_price.toLocaleString()}</p>
                    </div>
                    {data[0].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>

                {/* second coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[1].image} alt='/' id='img-coin' />
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[1].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[1].current_price.toLocaleString()}</p>
                    </div>
                    {data[1].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[1].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[1].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>

                {/* third coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[2].image} alt='/' id='img-coin'/>
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[2].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[2].current_price.toLocaleString()}</p>
                    </div>
                    {data[2].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[2].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[2].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>

                {/* fourth coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[8].image} alt='/' id='img-coin' class='resize'/>
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[8].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[8].current_price.toLocaleString()}</p>
                    </div>
                    {data[8].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[8].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[8].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                
                {/* fifth coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[77].image} alt='/' id='img-coin' />
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[77].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[77].current_price.toLocaleString()}</p>
                    </div>
                    {data[77].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[77].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[77].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
            </div>
            {/* 2nd */}
            <div id='second-row-coins' className='flex justify-center'>
                {/* first coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[46].image} alt='/' id='img-coin' />
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[46].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[46].current_price.toLocaleString()}</p>
                    </div>
                    {data[46].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[46].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[46].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>

                {/* second coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[52].image} alt='/' id='img-coin' />
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[52].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[52].current_price.toLocaleString()}</p>
                    </div>
                    {data[52].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[52].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[52].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>

                {/* third coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[79].image} alt='/' id='img-coin'/>
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[79].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[79].current_price.toLocaleString()}</p>
                    </div>
                    {data[79].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[79].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[79].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>

                {/* fourth coin */}
                <div id='card' className='text-center'>
                    <div id='top'>
                        <img src={data[95].image} alt='/' id='img-coin' class='resize'/>
                    </div>
                    <div>
                        <p className='text-[1rem] font-medium capitalize text-center mt-[-5px]'>{data[95].name}</p>
                        <p className='font-bold text-[1rem] mt-[0] text-center'>${data[95].current_price.toLocaleString()}</p>
                    </div>
                    {data[95].price_change_percentage_24h < 0 ? (
                        <span id='red'>
                            <FiArrowDown id='icon'/>
                            {data[95].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span id='green'>
                            <FiArrowUpRight id='icon'/>
                            {data[95].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
            </div>
            
        </div>

        
</>)
}

export default Featured