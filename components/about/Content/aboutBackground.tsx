import React from 'react'

const contBackground = () => {
  return (
    <React.Fragment>
      <div
        className=" pointer-events-none absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(#edf4ed_1px,transparent_2px),linear-gradient(90deg,#edf4ed_1px,transparent_2px)]
          dark:[background-image:linear-gradient(#301014_1px,transparent_2px),linear-gradient(90deg,#301014_1px,transparent_2px)]
          [background-size:64px_64px]
          "
      />
      <div className=" pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1.5px_1.5px,#edf4ed_1.8px,transparent_0)] dark:bg-[radial-gradient(circle_at_1.5px_1.5px,#301014_1.8px,transparent_0)]" 
        style={{ backgroundSize: '24px 24px',}}
      />

      <div className="pointer-events-none absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[5%] bottom-[12%] h-40 w-40 rounded-full bg-celadon/20 blur-3xl" />
    </React.Fragment>
  )
}

export default contBackground
