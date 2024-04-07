import React, { useState } from 'react'
import AppUtils from '../AppUtils'
import MyInput from './MyInput'
const LotCostCalculator = () => {
    const [form, setForm] = useState({ prevLotMaliyet: undefined, prevLot: undefined, currentLotMaliyet: undefined, currentSermaye: undefined })
    const [result, setResult] = useState("")
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        const response = AppUtils.CalculateNewCost(Number(form.prevLotMaliyet), Number(form.prevLot), Number(form.currentLotMaliyet), Number(form.currentSermaye))
        setResult(response)
    }
    return (
        <div>
            <div className='container'><span className='title'>Lot Maliyet Hesaplayıcı</span></div>
            <span className='subhead'>(paraya göre)</span>
            <MyInput handleChange={handleChange} placeHolder={'Lot maliyetiniz'} name={"prevLotMaliyet"} />
            <MyInput handleChange={handleChange} placeHolder={'Lot sayınız'} name={"prevLot"} />
            <MyInput handleChange={handleChange} placeHolder={'Lotun güncel fiyatı'} name={"currentLotMaliyet"} />
            <MyInput handleChange={handleChange} placeHolder={'Ekleyeceğiniz para miktarı'} name={"currentSermaye"} />
            {result && <span className='my-result'>{result}</span>}
            <div className='my-button-div'><button className="my-button" onClick={handleClick}>Hesapla</button></div>
        </div>
    )
}

export default LotCostCalculator