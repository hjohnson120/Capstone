import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CreateLogin() {
  const [login, getLogin] = useState('')

  return (
    <>
      <section>
        <header>Do Something!</header>
        <p>The gift of your time is priceless.</p>
      </section>
      <section>
        <img />
        <section class="login-input">
          <input placeholder="email" />
          <input placeholder="password" />
          <button>LOGIN</button>
          <button>CREATE ACCOUNT</button>
        </section>
      </section>
    </>
  )
}
