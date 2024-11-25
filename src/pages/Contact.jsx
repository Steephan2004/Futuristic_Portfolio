import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, serCurrentAnimation] = useState('idle');

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => serCurrentAnimation('walk');
  const handleBlur = () => serCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    serCurrentAnimation('hit');

    emailjs.send(   
      'service_7sxt1so',
      'template_1uvw9pq',
      {
        from_name: form.name,
        to_name: "Steve",
        from_email: form.email,
        to_email: 'steephan383@gmail.com',
        message: form.message
      },
      '_CZZx5yY0Wok19ay7',
    ).then(() => {
      setIsLoading(false);
      alert("Message Sent Successfully")
      setTimeout(()=>{
        serCurrentAnimation('idle')
        setForm({name:'',email:'',message:''});
      },[3000])
    }).catch((error) => {
      setIsLoading(false);
      alert("Failed to send message")
      serCurrentAnimation('idle')
      console.log(error)
    })
  };
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch!!!</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name='name'
              className='input'
              placeholder='John'
              required value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />

          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />

          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              name='message'
              className='input'
              placeholder='Let me know how I can help you'
              required value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </label>
          <button
            type='Submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleSubmit}
            disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.5, -0.7, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
