"use client";

export default function Page() {
  const data = [
    {
      Primary: [
        {
          id: 1,
          name: "teacher 1",
        },
        {
          id: 2,
          name: "teacher 2",
        },
        {
          id: 3,
          name: "teacher 3",
        },
        {
          id: 4,
          name: "teacher 4",
        },
        {
          id: 5,
          name: "teacher 5",
        },
        {
          id: 6,
          name: "teacher 6",
        },
        {
          id: 7,
          name: "teacher 7",
        },
        {
          id: 8,
          name: "teacher 8",
        },
        {
          id: 9,
          name: "teacher 9",
        },
        {
          id: 10,
          name: "teacher 10",
        },
      ],
    },
    {
      Middle: [
        {
          id: 1,
          name: "teacher 1",
        },
        {
          id: 2,
          name: "teacher 2",
        },
        {
          id: 3,
          name: "teacher 3",
        },
      ],
    },
    {
      Higher: [
        {
          id: 1,
          name: "teacher 1",
        },
        {
          id: 2,
          name: "teacher 2",
        },
        {
          id: 3,
          name: "teacher 3",
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

  //   Object.entries(primary).forEach(([key, value]) => {
  //     Object.entries(value).forEach(([key_items, value_items]) => {
  //       console.log(key_items.replaceAll("_", " "));
  //       list_cl.push(key_items.replaceAll("_", " "));

  //       Object.entries(value_items).forEach(([key_item, value_item]) => {
  //         console.log(key_item, value_item);
  //       });
  //     });
  //   });

  return (
    <div className=" w-full flex flex-wrap ">
      {Object.entries(data).map(([, value]) =>
        Object.entries(value).map(([key, value_items]) => (
          <div key={makeid(5)} className="w-1/2 text-3xl h-fit p-10">
            <p className="p-2">{key}</p>

            <table className="border-4 w-full border-collapse">
              <tbody key={makeid(20)} className="border-4">
                {Object.entries(value_items).map(([, value_item]) => (
                  <tr key={makeid(10)} className="border-4 text-2xl ">
                    <td className="border-4 p-4">{value_item.id}</td>
                    <td className="p-4">{value_item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}
