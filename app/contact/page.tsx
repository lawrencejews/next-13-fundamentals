'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Contact() {
  
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('/api/contact', {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    console.log("Connect to the contact component")
   }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
  
  // const router = useRouter();
  // return (
  //   <div>
  //     <h1>Contact</h1>
  //     <Link href="/">home</Link>
  //     <button onClick={() => router.push('/')}>Home</button>
  //   </div>
  // )
}