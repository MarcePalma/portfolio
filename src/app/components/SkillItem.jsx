import React from 'react'

export default function SkillItem(props) {
    const {icon, title} = props

  return (
    <section className='flex items-center mb-2'>
        {icon}
        <span className='ml-2'>{title}</span>
    </section>
  )
}
