import React, { Component } from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <section>
        <NavBar />
        <header>Do Something!</header>
      </section>
      <section>
        <h1> Search Here for opportunities in your area..</h1>
        <input placeholder="ZIP" />
        <button>Search</button>
      </section>
    </>
  )
}
