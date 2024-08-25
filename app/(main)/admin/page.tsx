//   ADMIN SHOULD BE ABLE TO LOG WITH HIS CRED TO MAKE A CERT AND APPROVE IT 

// ONLY ADMIN CAN SEE THIS PAGE

// Path: app/admin/page.tsx

// CERT SHOULD CONTAIN 
// NAME  // TIME // COURSE NAME  // COURSE COMPILATION DATE/



import { DataTable } from '@/components/table'
import { db } from '@/lib/db'

import React from 'react'



const page = async () => {
  const certs = await db.certificate.findMany()


  

  return (
    <div className='p-24'>
      
      <div className='text-3xl py-6'>
        Certifcates
      </div>
        <DataTable data={certs} />
    </div>
  )
}

export default page