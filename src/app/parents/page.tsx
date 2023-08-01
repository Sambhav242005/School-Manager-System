
export default function(){
    return<>
  
    <header className="w-full bg-gray-800 p-4 flex justify-between items-center">
  <nav className="flex items-center">
    <div className="text-white text-xs hidden sm:block ">
      <a href="#" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-2">Assignments</a>
      <a href="#" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-5">Scheduled Classes</a>
      <a href="#" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-5">Query</a>
      
      <div className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-5">
              <label htmlFor="student">Student</label>
              <select name="student" id="student" >
                <option value="1">Child 1</option>
                <option value="2">Child 2</option>
              </select>
            </div>
     </div>
        

    
  </nav>
  
</header>


<main className="flex w-full h-screen">
<aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
  <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
      <div className="text-sm">
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="parents/timetable">Time Table</a></div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="parents/testscore">Test Upcoming / Done / Score </a></div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="parents/result"> Report Card</a></div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="parents/ptm"> P.T.M</a></div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="parents/schlevents"> Upcoming Events</a></div>
      </div>


  </div>
</aside>

</main>
    </>
}