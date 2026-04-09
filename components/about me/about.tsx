'use client'
//import Image from 'next/image'
import React from 'react'
import GlobalScene from './global';
import Atributes from './atributes'
import ContactCard from './contactCard';
import Motto from './Motto';
import Action from './action';
import Description from './description'

export default function about() {
    return (
        <div className='flex-wrap flex pt-15 pb-10 justify-center'>
            <div className='grid grid-cols-3 gap-3 px-3 py-5 md:px-10 '>
                <section className='grid grid-cols-3 col-span-3 gap-2'>
                    <Description/>
                    <Atributes/>
                </section>

                <section className='grid grid-cols-4 gap-1.5  col-span-3'>
                    <Motto/>
                    <GlobalScene />
                    <Action/>
                    <ContactCard/>
                </section>
            </div>
        </div>
    )
}

//shadow-[0_0_20px_rgba(245,158,11,0.4)]