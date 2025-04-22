'use client'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        sessionStorage.setItem('user', true)
        setEmail('');
        setPassword('');
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c0c0c0] font-retro text-black">
      <div className="bg-[#e0e0e0] border border-gray-600 p-6 w-[400px] shadow-[inset_-2px_-2px_0_#fff,inset_2px_2px_0_#808080]">
        <h1 style={{ fontFamily: 'var(--font-press-start)' }} className="text-xl font-retro mb-5 border-b border-black pb-2">Sign In</h1>

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full font-retro p-2 mb-4 border border-black outline-none bg-white text-black shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]"
          style={{ fontFamily: 'var(--font-press-start)' }}
        />
  
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full font-retro p-2 mb-4 border border-black outline-none bg-white text-black shadow-[inset_-1px_-1px_0_#fff,inset_1px_1px_0_#808080]"
          style={{ fontFamily: 'var(--font-press-start)' }}
        />
  
        <button 
          onClick={handleSignIn}
          className="w-full font-retro p-2 border border-black bg-[#d4d0c8] text-black shadow-[inset_-2px_-2px_0_#fff,inset_2px_2px_0_#808080] hover:bg-[#c8c8c8]"
          style={{ fontFamily: 'var(--font-press-start)' }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;