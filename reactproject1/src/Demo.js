import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './Demo.css'
import { render } from '@testing-library/react';

const Demo =({name})=>
{
    return <div className='style' >
    <h1>Hello {name} 😎</h1>
    <p>Welcome to React</p>

    </div>
}


export default Demo; 