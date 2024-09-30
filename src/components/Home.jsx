import React, { useState } from 'react'

function Home() {
    const[title, setTitle] = useState('');
  return (
    <div>
        <input  className='p-2 rounded-2xl'             
                    type='text' 
                    placeholder='Enter Title Here...' value={title} 
                    onChange={(e) => setTitle(e.target.value)}
        />

        <button>
            
        </button>
    </div>
  )
}

export default Home
