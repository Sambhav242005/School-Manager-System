export default function () {
  const timing = [
    {
      "Monday-Friday": [
        {
          class: "1 to 5",
          time: "8:15 am to 1:30 pm",
        },
        {
          class: "6 to 10",
          time: "8:15 am to 2:45 pm",
        },
        {
          class: "11 to 12",
          time: "7:15 am to 1:15 pm",
        },
      ],
      Saturday: [
        {
          class: "1 to 5",
          time: "8:15 am to 12:30 pm",
        },
        {
          class: "6 to 10",
          time: "8:15 am to 2:00 pm",
        },
        {
          class: "11 to 12",
          time: "7:15 am to 1:15 pm",
        },
      ],
    },
  ];

  function makeid(length: number) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    return result;
  }

  return (
    <>
      <div id="school-timing">
        <div className=" p-6 grid grid-flow-col w-full ">
          {Object.entries(timing).map(([, value]) =>
            Object.entries(value).map(([key_items, value_items]) => (
              <div className="w-full p-2">
                <p className=" p-5 pl-0 font-serif text-3xl">
                  School Timing :- {key_items}
                </p>
                <table className="w-full font-serif">
                  <thead className="text-xl border-4 border-gray-600">
                    <tr>
                      <th
                        scope="col"
                        className="text-xl border-2 p-3 border-gray-600"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="text-xl border-2 p-3 border-gray-600"
                      >
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    key={makeid(10)}
                    className="text-lg border-4 text-center border-gray-600"
                  >
                    {Object.entries(value_items).map(([, value_item]) => (
                      <tr>
                        <td className="text-lg border-2 p-5 border-gray-600">
                          Class : {value_item.class}
                        </td>
                        <td className="text-lg border-2 p-5 border-gray-600">
                          {value_item.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
