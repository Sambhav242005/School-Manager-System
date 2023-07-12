export default function () {
  const timing = [
    { Director: "2:45pm to 4:00pm" },
    { Principal: "4:00pm to 6:00pm" },
    { Accounts: "9:00am to 1:00pm" },
    { Teachers: "3:00pm to 4:00pm" },
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
      <div className="mx-auto max-w-4xl w-full  ">
        <p className=" p-5 pl-0 font-serif text-3xl mx-8">
          Parents Visiting Hours
        </p>
        <table className="max-w-3xl border-4 border-gray-700 mx-8 w-full font-serif font-semibold">
          <tbody>
            {Object.entries(timing).map(([, value]) =>
              Object.entries(value).map(([key_items, value_items]) => (
                <tr>
                  <td className="border-2 p-5 border-gray-700">{key_items}</td>
                  <td className="border-2 p-5 border-gray-700">
                    {value_items}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
