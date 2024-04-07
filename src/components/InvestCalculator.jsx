import React, { useState } from 'react'
import AppUtils from '../AppUtils'
import MyInput from './MyInput'
const InvestCalculator = () => {
    const [form, setForm] = useState({ initialInvestmentF: undefined, monthlyContributionF: undefined, powerF: undefined, range: undefined })
    const [result, setResult] = useState("")
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        const response = AppUtils.InvestCalculator(Number(form.initialInvestmentF), Number(form.monthlyContributionF), Number(form.powerF), Number(form.range))
        setResult(response)
    }
    return (
        <div >
            <div className='container'><span className='title'>Yatırım Hesaplayıcı</span></div>
            <MyInput handleChange={handleChange} placeHolder={'Başlangıç paranız'} name={"initialInvestmentF"} />
            <MyInput handleChange={handleChange} placeHolder={'Aylık ekleyeceğiniz para'} name={"monthlyContributionF"} />
            <MyInput handleChange={handleChange} placeHolder={'Yıllık beklenilen kat'} name={"powerF"} />
            <MyInput handleChange={handleChange} placeHolder={'Vade (Yıl)'} name={"range"} />
            {result && <span className='my-result'>{result}</span>}
            <div className='my-button-div'><button className="my-button" onClick={handleClick}>Hesapla</button></div>

        </div>
    )
}

export default InvestCalculator