import React from 'react'

const contBackground = () => {
  return (
    <React.Fragment>
      <div
        className=" pointer-events-none absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(#301014_1px,transparent_2px),linear-gradient(90deg,#301014_1px,transparent_2px)]
          [background-size:64px_64px] "
      />
      <div className=" pointer-events-none absolute inset-0 opacity-[0.08] " 
        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #301014 1.8px, transparent 0)', backgroundSize: '24px 24px',}}
      />

      <div className="pointer-events-none absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[5%] bottom-[12%] h-40 w-40 rounded-full bg-celadon/20 blur-3xl" />
    </React.Fragment>
  )
}

export default contBackground
