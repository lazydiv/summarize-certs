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
    <div className="flex w-11/12 container  bg-neutral-800 dark:bg-slate-50/90 text-white dark:text-black   h-24 my-12 rounded-xl items-center justify-center border-6 border-white ">
      <p className="text-md mx-4 text-gray-400 dark:text-gray-400">
        © 2024 Summarize Team. All rights reserved.
      </p>
      <p>
        Developed By <a href="https://www.github.com/lazydiv/">lazyDev </a>
      </p>
    </div>
  )
}

export default Footer