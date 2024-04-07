import React from 'react'

const MyInput = ({ handleChange, placeHolder, name }) => {
    return (
        <div className='my-input-div'>
            <input className='my-input' onChange={handleChange} placeholder={placeHolder} name={name} />
        </div>

    )
}

export default MyInput