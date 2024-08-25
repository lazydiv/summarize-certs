'use client'


import { useEffect, useState } from 'react'

const Footer = () => {
  // solve the hydration erorr using useEffect

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="flex md:w-full w-[80%]  bg-neutral-800 dark:bg-slate-50/90 text-white dark:text-black  container h-24 my-12 rounded-xl items-center justify-center border-6 border-white ">
      <p className="text-md mx-4 text-gray-400 dark:text-gray-400">
        © 2023 Acme Certifications. All rights reserved.
      </p>
      <p>
        By <a href="https://www.github.com/lazydiv/">lazyDev at <a href="https://www.facebook.com/triple.s.cairo.branch">TRIPLE-S</a></a>
      </p>
    </div>
  )
}

export default Footer