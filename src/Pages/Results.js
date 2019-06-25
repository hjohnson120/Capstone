import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
// import { Links } from 'react-router-dom'

export default function Results() {
  return (
    <>
      <section>
        <NavBar />
        <header>Do Something!</header>
      </section>
      <section className="selected-opps">
        <OpportunitiesContainer />
      </section>
    </>
  )
}
