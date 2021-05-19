import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Crypto from './Crytpo';
import './App.css';

function App() {
    const [cryptoCoins, setCryptoCoins] = useState([]);
    const [cryptoSearch, setCryptoSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then((res) => {
                setCryptoCoins(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        setCryptoSearch(e.target.value);
    };

    const filterCrypto = cryptoCoins.filter((crypto) =>
        crypto.name.toLowerCase().includes(cryptoSearch.toLowerCase())
    );

    return (
        <div className='crypto-app'>
            <div className='crypto-search'>
                <h1 className='crypto-text'>Crypto Search</h1>

                <form className='crypto-form'>
                    <input
                        type='text'
                        className='crypto-input'
                        placeholder='Search'
                        onChange={handleChange}
                    ></input>
                </form>
            </div>

            {filterCrypto.map((crypto) => {
                return (
                    <Crypto
                        key={crypto.id}
                        name={crypto.name}
                        image={crypto.image}
                        symbol={crypto.symbol}
                        marketcap={crypto.market_cap}
                        price={crypto.current_price}
                        priceChange={crypto.price_change_percentage_24h}
                        volume={crypto.total_volume}
                    />
                );
            })}
        </div>
    );
}

export default App;
