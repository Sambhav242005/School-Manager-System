import DPMesg from "@/components/DP-mesg";
import Slider from "@/components/slider";
import Image from "next/image";
import pincipal from "img/principal.jpg";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <DPMesg></DPMesg>

      <div
        id="dm"
        className="flex p-2 text-center  from-[#6091d0]  to-[#3c74bb] bg-gradient-to-t "
      >
        <div className="w-1/3 p-2">
          <p className="text-2xl font-serif ">
            <b>Mission.</b>
          </p>
          <p className="font-mono text-lg font-semibold text-gray-800">
            Our prime goal right from the beginning has been to bring out the
            best of the human potential in each child and thus to promote
            excellence through value-based education with a relevant and
            continuously updated curriculum and modern tech-aided teaching
            methodology.
          </p>
        </div>
        <div className="w-1/3 p-4  border-collapse border-x-4">
          <p className="text-2xl font-serif ">
            <b>Vision.</b>
          </p>

          <p className="font-mono text-lg font-semibold text-gray-800">
            To prepare dynamic and caring citizens to meet the challenge of a
            global society while retaining the traditional values.
          </p>
        </div>
        <div className="w-1/3 p-2 ">
          <p className="text-2xl font-serif ">
            <b>About Us.</b>
          </p>
          <p className="font-mono font-semibold text-gray-800 text-lg">
            We, <b>SCHOOL Name</b> set up at <b>LOCATION OF SCHOOL</b>, believe
            in providing academic excellence, better growth in initial days of
            learning as well as child care to our associated students.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
