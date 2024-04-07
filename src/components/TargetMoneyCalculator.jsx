import React, { useState } from 'react'
import AppUtils from '../AppUtils'
import MyInput from './MyInput'
const TargetMoneyCalculator = () => {
    const [form, setForm] = useState({ istenilenMaliyet: undefined, oncekiLotSayisi: undefined, oncekiLotFiyati: undefined, guncelLotFiyati: undefined })
    const [result, setResult] = useState("")
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        const response = AppUtils.CalculateMoneyINeed(Number(form.istenilenMaliyet), Number(form.oncekiLotSayisi), Number(form.oncekiLotFiyati), Number(form.guncelLotFiyati))
        setResult(response)
    }
    return (
        <div>
            <div className='container'><span className='title'>Lot Maliyet Hesaplayıcı</span></div>
            <span className='subhead'>(hedef lot maliyetine göre)</span>
            <MyInput handleChange={handleChange} placeHolder={'Hedeflediğiniz maliyet'} name={"istenilenMaliyet"} />
            <MyInput handleChange={handleChange} placeHolder={'Lot sayınız'} name={"oncekiLotSayisi"} />
            <MyInput handleChange={handleChange} placeHolder={'Sahip olduğunuz maliyet'} name={"oncekiLotFiyati"} />
            <MyInput handleChange={handleChange} placeHolder={'Güncel lot fiyatı'} name={"guncelLotFiyati"} />
            {result && <span className='my-result'>{result}</span>}
            <div className='my-button-div'><button className="my-button" onClick={handleClick}>Hesapla</button></div>
        </div>
    )
}

export default TargetMoneyCalculator