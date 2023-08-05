
export default function(){
    return<>
  
    <header className="w-full bg-gray-500 p-4 flex justify-between items-center">
  <nav className="flex items-center">
    <div className="text-white text-sm hidden sm:block ">
      <a href="teacher/assignments" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1 ">Manage Assignments</a>
      <a href="#" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-5 ">Scheduled Classes</a>
      <a href="#" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-5 ">Important Anouncement</a>
      <a href="#" className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-5 ">Resource Sharing</a>
      
      </div>
        

    
  </nav>
  
</header>


<main className="flex w-full h-screen">
<aside className="w-70 h-screen bg-gray shadow-md w-fulll hidden sm:block">
  <div className="flex flex-col justify-between h-screen p-4 bg-gray-500">
      <div className="text-sm">
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="teacher/timetable">Schedule Time Table</a></div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="student/test/id">Schedule Test </a></div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Update Report Card</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Update Student Records</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"><a href="teacher/ptm">P.T.M.</a></div>
      </div>


  </div>
</aside>

</main>
    </>
}