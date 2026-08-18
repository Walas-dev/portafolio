import React from 'react'

const name = ['React','TypeScript','Laravel','Docker']

const heroSlider = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 font-mono uppercase tracking-[0.28em] text-[11px] text-muted  dark:text-cream text-mahogany">
        {name.map((n, index)=>(
          <React.Fragment key={index}>
            <span>{n}</span>
            {index < 3 ? (<span>•</span>):''}
          </React.Fragment>  
        ))}
        
    </div>
  )
}

export default heroSlider
