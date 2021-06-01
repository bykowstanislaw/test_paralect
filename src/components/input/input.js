import React, { useState } from 'react';
import Result from '../searchResult/searchResult';
import '../input/input.css';
import './mediaInput.css'


const Input = () => {


    const [inputValue, setInputValue] = useState('')

    const onKeyPressHandler = (event) => {
        if (event.which === 13 || event.keyCode === 13) {
            setInputValue(event.target.value)
        }
    }

    return (
        <>
            <div className="menu">
                <div className="menu__logo"><img src='/images/logo.png' alt='github logo' /></div>
                <div className="menu__input" ><input type='text' onKeyPress={onKeyPressHandler} className='menu__search' /></div>
            </div>
            <Result inputValue={inputValue} />

        </>
    )
}

export default Input