"use client";

export default function () {
  const primary = [
    {
      class_1: [
        {
          name: "teacher 1",
          subject: "maths",
        },
        {
          name: "teacher 2",
          subject: "english",
        },
        {
          name: "teacher 3",
          subject: "hindi",
        },
      ],
    },
    {
      class_2: [
        {
          name: "sss",
          subject: "maths",
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
    <>
      <section className="text-gray-600 body-font bg-gray-50 h-screen w-full flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto ">
          {Object.entries(primary).map(([, value]) =>
            Object.entries(value).map(([key_items, value_items]) => (
              <details
                key={makeid(10)}
                className="w-full text-2xl m-2 bg-slate-100"
                open
              >
                <summary>{key_items.replaceAll("_", " ")}</summary>
                <div
                  key={makeid(20)}
                  className="flex flex-wrap w-auto text-center"
                >
                  {Object.entries(value_items).map(([, value_item]) => (
                    <div className="p-4 min-w-max  sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                      <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                        <div>
                          <h2 className="text-gray-900 text-lg font-bold">
                            {value_item.name}
                          </h2>
                          <h3 className="mt-2 text-xl font-bold text-left">
                            {value_item.subject}
                          </h3>
                        </div>
                        <div className="w-32 h-32 ml-10 rounded-full shadow-2xl  flex justify-center items-center ">
                          <div>
                            <img
                              src="https://th.bing.com/th/id/OIP.Fxz-KqpP_BFYFPiWqC3dlwHaJH?pid=ImgDet&rs=1"
                              className="max-w-32 max-h-32 aspect-auto rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))
          )}
        </div>
      </section>
    </>
  );
}
