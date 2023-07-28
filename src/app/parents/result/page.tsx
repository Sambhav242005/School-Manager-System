import "css/result.css"
export default function(){
    return<>
    <body className="flex items-center justify-center">
	<div className="container">
    <div className=" bg-gray-700 text-white p-2 rounded mt-2">Academic Year:2023-2024 <br /> Student Name: <br /> Class: <br />Mother Name: <br /> Father Name:
      </div>
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            
			<thead className="text-black">
				<tr className="bg-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Subject</th>
					<th className="p-3 text-left">Marks</th>
					<th className="p-3 text-left w-[110px]">Out Of</th>
				</tr>
			</thead>
			<tbody className="flex-1 sm:flex-none">
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3">Maths</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">85</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 ">100</td>
				</tr>
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3">Science</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3">88</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 ">100</td>
				</tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td className="border-grey-light border hover:bg-gray-100 p-3">Hindi</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3">75</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 ">100</td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border hover:bg-gray-100 p-3">Social Science</td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">70</td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 ">100</td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border hover:bg-gray-100 p-3">English</td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">83</td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 ">100</td>
                </tr>
			</tbody>
		</table>
	</div>
</body>

    </>
}