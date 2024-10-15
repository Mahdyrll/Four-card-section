import './index.css'
import BoxComponent from './boxComponent'

function App() {

  return (
    <div className='pb-[70px] bg-[#FBFBFB]'>
      <div className='px-8 text-center mt-20'>
        <p className='font-extraLight text-gray-500 text-[22px] sm:text-[35px] sm:text-gray-600'>Reliable, efficient delivery</p>
        <p className='font-medium text-gray-600 text-[22px] sm:text-[35px]'>Powered by Technology</p>
        <p className='font-light text-stone-400 text-sm w-[18rem] mt-4 mr-auto ml-auto leading-6 sm:text-[15px] sm:w-[32rem] sm:leading-[25px]'>Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful</p>
      </div>
      <BoxComponent />
    </div>
  )
}

export default App