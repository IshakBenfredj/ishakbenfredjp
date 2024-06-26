import {Link} from 'react-router-dom'
import files from '../constants/files'

export default function NotFound() {
  return (
    <div className='section min-h-screen flexCenter'>
        <div className="container flexCenter flex-col gap-6">
            <img src={files.nf} alt="" className='w-48' />
            <h1 className='font-bold text-5xl text-gray-800 dark:text-gray-100 capitalize text-center leading-[60px]'>Ooops Page not found</h1>
            <Link to={'/'} className='capitalize text-white bg-secondary hover:bg-secondary/90 px-5 py-3 rounded-full text-xl font-bold'> return to home </Link>
        </div>
    </div>
  )
}