import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { HiArrowNarrowRight } from 'react-icons/hi'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};



const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};


const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 font-sans'>

            <form action='https://getform.io/f/cba16026-2d63-491a-8ab8-33f0ea8cdcb6' className='flex flex-col max-w-[600px] w-full' method='POST'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C23B22] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Sumbit the form to get in touch with me</p>
                </div>
                <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' required={true} />
                <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
                <textarea className='bg-gray-300 p-2' name='message' placeholder='Your Message' rows="10"></textarea>

                <button className='text-white group border-2 px-4 py-3 my-8 m-auto flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans'>Let's Connect

                    <span className='group-hover:ml-4 duration-300'>
                        <HiArrowNarrowRight className='ml-4' />

                    </span>

                </button>
            </form>
        </div>
    )
}

export default Contact
