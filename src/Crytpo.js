import React from 'react';
import './Crypto.css';

const Crytpo = ({ image, name, symbol, price, marketcap, priceChange, volume }) => {
    return (
        <div className='crypto-container'>
            <div className='crypto-row'>
                <div className='crypto'>
                    <img className='crypto-image' src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='crypto-symbol'>{symbol}</p>
                </div>
                <div className='crypto-data'>
                    <p className='crypto-price'>${price.toLocaleString(2)}</p>
                    <p className='crypto-volume'> 24hr Volume: ${volume.toLocaleString(2)}</p>
                    {priceChange < 0 ? (
                        <p className='crypto-red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='crypto-green'>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='crypto-marketcap'>Mkt Cap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Crytpo;
