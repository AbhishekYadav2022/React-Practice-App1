import React from 'react'
import Card from './Card'
import './Container.css'


function Container() {
  return (
    <div className='container'>
        <Card heading={"Accessible Frot-End Components "} paragraph={"Reliable accessible UI components: :span styles, modals, date pickers, navigation, tables, buttons, SVGs."} link={"Explore Accessible Components"} />
        <Card heading={"Css Generators & Tools "} paragraph={"Useful CSS tools for animations, shadows, cubic-bezier curves, easing gradients, filters, overlays, type scales."} link={"Explore CSS Generators"} />
        <Card heading={"Front-End Boilerplates & Starter Kits "} paragraph={"HTML boilerplates, CSS resets, forms, dev themes, gitignore, CSS snippets, static sites, style guides."} link={"Explore Front-End Boilerplates"}/>
    </div>
  )
}

export default Container