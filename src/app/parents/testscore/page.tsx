export default function(){
    return<>
    
  <div className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">
    
    <div className="relative block md:flex items-center">
      <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="text-lg font-semibold text-Black-500 uppercase p-8 text-center border-b border-gray-800 tracking-wide">Test Ratio</div>
        <div className="block sm:flex md:block lg:flex items-center justify-center">
          <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
            <div className="inline-flex items-center">
              <span className="text-3xl font-medium">1.4%</span>
              <span className="text-xl text-gray-600 ml-2">+</span>
              <span className="text-xl ml-2">20p</span>
            </div>
            <span className="block text-sm text-black-800 mt-2">Test Done</span>
          </div>
          <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
            <div className="inline-flex items-center">
              <span className="text-3xl font-medium">2.9%</span>
              <span className="text-xl text-gray-600 ml-2">+</span>
              <span className="text-xl ml-2">20p</span>
            </div>
            <span className="block text-sm text-black-800 mt-2">Test Pending</span>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <ul>
            <li className="flex items-center">
              <div className="bg-gray-500 rounded-full p-2 fill-current text-green-500">
              </div>
              <span className="text-gray-800 text-lg ml-3">Weekly Test Done / Pending</span>
            </li>
            <li className="flex items-center mt-3">
              <div className="bg-gray-500 rounded-full p-2 fill-current text-green-500">
              </div>
              <span className="text-gray-800 text-lg ml-3">Monthly Test Done / Pending</span>
            </li>
            <li className="flex items-center mt-3">
              <div className="bg-gray-500 rounded-full p-2 fill-current text-green-500">
              </div>
              <span className="text-gray-800 text-lg ml-3">Yearly Test Done / Pending</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
        <div className="bg-gray-600 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
          <div className="text-lg font-medium uppercase p-10 text-center">Performance</div>
          <div className="mt-8 border border-white-500 mx-8 lg:mx-16 flex flex-wrap">
            <a href="#" className="flex items-center justify-center w-1/2 text-center p-6 border-b border-white-500 hover:bg-gray-900">Test Done</a><br />
            <a href="#" className="flex items-center justify-center w-1/2 text-center p-6 border-b border-white-500 hover:bg-gray-900">Pending Test</a><br />
            <a href="#" className="flex items-center justify-center w-1/2 text-center p-6 border-white-500 hover:bg-gray-900">Extra Classes</a>
            <a href="#" className="flex items-center justify-center w-1/2 text-center p-6 border-white-500 hover:bg-gray-900">Doubt Sessions</a>

          </div>
          <a className="block flex items-center justify-center p-6 text-md font-semibold text-white-300 uppercase mt-8 hover:bg-gray-900" href="#">
            <span>Contact Teacher</span>
            
          </a>
        </div>
      </div>
    </div>
    
  </div>
    </>
}