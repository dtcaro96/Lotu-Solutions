import React from 'react';
import '../Styles/Contact.css'

export default function Contact () {
    return (
        <div className='contactForm'>
            <h3>CONTACT</h3>
            <div className='formBox'>
                <form className='form'>
                    <input className='inputOne' type='text' placeholder='FIRST NAME' />
                    <input className='inputTwo' type='text' placeholder='LAST NAME' />
                    <input className='inputThreeFour' type='email' placeholder='EMAIL ADDRESS' />
                    <input className='inputThreeFour' type='text' placeholder='SUBJECT' />
                    <textarea className='inputFive' type='text' placeholder='MESSAGE' />
                    <div className='buttonBox'>
                        <button>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
