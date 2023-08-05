export default function(){
    return<>
    <div className="flex flex-col">
    <div className="py-2 inline-block min-w-fit sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-lg font-medium text-black px-6 py-4">
                CLASS
              </th>
              <th scope="col" className="text-lg font-medium text-black px-6 py-4">
                SUBJECT
              </th>
              <th scope="col" className="text-lg font-medium text-black px-6 py-4">
                TIME
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="border-b">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Default
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                Cell
              </td>
            </tr> */}
            <tr className="border-b bg-blue-100 border-blue-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                1st
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                ENGLISH
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                9:00am-9:40am
              </td>
            </tr>
            <tr className="border-b bg-purple-100 border-purple-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                2nd
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                HINDI
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                10:00am-10:40am
              </td>
            </tr>
            <tr className="border-b bg-green-100 border-green-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                3rd
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                SCIENCE
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                10:45am-11:30am
              </td>
            </tr>
            <tr className="border-b bg-red-100 border-red-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                4th
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                MATHS
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                11:35am-12:15pm
              </td>
            </tr>
            <tr className="border-b bg-yellow-100 border-yellow-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                5th
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                SOCIAL SCIENCE
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                12:30pm-1:10pm
              </td>
            </tr>
            <tr className="border-b bg-indigo-100 border-indigo-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                6th
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                History
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                1:15pm-2:00pm
              </td>
            </tr>
            <tr className="border-b bg-gray-400 border-gray-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                7th
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                ------
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                -------
              </td>
            </tr>
            <tr className="border-b bg-gray-800 boder-gray-900">
              <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                8th
              </td>
              <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                -------
              </td>
              <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                -------
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

    </>
}