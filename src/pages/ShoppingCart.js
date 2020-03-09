import React, {useState} from 'react'
import Step1 from '../components/Step1'
// import Step2 from '../components/Step2'

function ShoppingCart() {

    const [step, setStep] = useState(1);

    return (
        <div className="shopping-cart">
            {step === 1 && <Step1 callback={setStep}/>}
            {/* {step === 2 && <Step2 callback={setStep}/>} */}
        </div>
    )
}

export default ShoppingCart
