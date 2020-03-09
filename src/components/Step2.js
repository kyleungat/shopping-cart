// import React, {useCallback} from 'react'
// import Order from './Order'

// function Step2({callback}) {

//     const handleBack = useCallback(
//         () => {
//             callback(1);
//         },
//         [],
//     )

//     return (
//         <>
//             <form className="step2-form">
//                 <fieldset>
//                     <legend>Personal Data</legend>

//                     <ul>
//                         <li>
//                             <label htmlFor={"first name"} >First Name:</label>
//                             <input type="text" id="first name" name="first name" required autoFocus/>
//                         </li>
//                         <li>
//                             <label htmlFor={"last name"} >Last Name:</label>
//                             <input type="text" id="last name" name="last name" required />
//                         </li>
//                         <li>
//                             <label htmlFor={"phone"} >Phone:</label>
//                             <input type="phone" id="phone" name="phone" required />
//                         </li>
//                         <li>
//                             <label htmlFor={"address"} >Address:</label>
//                             <input type="address" id="address" name="address" required size={50} />
//                         </li>
//                     </ul>
//                 </fieldset>

//             </form>
//             <button className="back-btn" onClick={handleBack}>back</button>
//             <div className="order-container">
//                 <Order />
//             </div>
//         </>
//     )
// }

// export default Step2
