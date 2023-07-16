import React, { useState } from 'react';
import ManualButtonCalculator from './MacroCalculators/ManualButtonCalculator';


const MacroPage = () => {

  return (
    <div className='text-center'>
            <h1 className="text-5xl pb-5 font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
              Plan <span className="text-[hsl(280,100%,70%)]">PREP</span> Eat
            </h1>
    <ManualButtonCalculator />
    </div>



  )
}

export default MacroPage