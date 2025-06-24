import React from 'react'
import { Button } from './components/ui/button'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const queryClient = new QueryClient()
  
  return (
     <QueryClientProvider client={queryClient}>
    <div className='text-8xl text-red-500 underline'>
      hello
      <Button variant={'destructive'} onClick={()=>console.log("this is my project")}>click me</Button>
    </div>
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


export default App
