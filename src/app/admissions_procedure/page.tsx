import Image from "next/image";
import student from "img/student.jpg";

export default function () {
  return (
    <div className="flex w-full  ">
      <div className="p-5  mt-20 w-1/2">
        <h2 className="text-3xl font-semibold font-sans">
          Admission Procedure
        </h2>
        <p className=" text-2xl font-serif">
          Daisy Dales is an English Medium, co-educational school. Children are
          admitted in Class Nursery to Class Twelfth in the day scholar
          category. Admission is given on the availability of seats and on the
          basis of past performance of the student and then counseling will be
          organized for the selection of qualified student to a class.
          <br />
          <br />
          The age criteria for Montessori classes is
        </p>
        <br />
        <h2 className="text-2xl font-semibold font-sans">Class / Age</h2>
        <table className=" text-xl font-serif">
          <tbody>
            <tr>
              <td className="p-4">
                <strong>Nursery</strong>
              </td>
              <td>2.5-3.5 years</td>
            </tr>
            <tr>
              <td className="p-4">
                <strong>KG-I</strong>
              </td>
              <td>3.5-4.5 years</td>
            </tr>
            <tr>
              <td className="p-4">
                <strong>KG-II</strong>
              </td>
              <td>4.5-5.5 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Image
        className="mx-auto h-auto max-w-1/2   p-10"
        width={500}
        height={500}
        alt="img"
        src={student}
      />
    </div>
  );
}
