import React, { useState } from 'react'
import axios from 'axios'

export default function CreateLogin() {
  const [login, getLogin] = useState('')

  return (
    <>
      <section>
        <header>Do Something!</header>
        <h2>The gift of your time is priceless.</h2>
        <hr />
      </section>
      <section>
        <img />
        <section>
          <input placeholder="email" />
          <input placeholder="password" />
          <button>LOGIN</button>
          <button>CREATE ACCOUNT</button>
        </section>
      </section>
    </>
  )
}
