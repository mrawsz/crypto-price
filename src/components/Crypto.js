import React, { Component } from 'react';
import Axios from 'axios';

import './Crypto.css';
import Currency from './Currency';

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 'bitcoin',
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0'
                },
                {
                    id: 'etherem',
                    name: 'Ethereum',
                    symbol: 'ETH',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0'
                }
            ]
        };
    }
    render () {
        let crypto = this.state.data.map( currency => (
            <Currency data ={currency} key={currency.id}/>
        ))
        return (
            <div className='crypto-container'>
                <ul className='crypto'>{crypto}</ul>
            </div>
        )
    }
}

export default Crypto;