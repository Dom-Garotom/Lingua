import TeacherCard from "./teacherCard";
import ImageTeacherOne from "../../../public/Mask.png"
import ImageTeacherTwo from "../../../public/Mask (1).png"
import ImageTeacherThree from "../../../public/Mask (2).png"
import FlagItalian from "../../../public/flag-Italian.png"
import FlagISpanish from "../../../public/flag-Spanish.png"
import FlagUk from "../../../public/flag-UK.png"
import TitleDefault from "../titleDefault";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


export default function SectionTeacher() {
  return (
    <div className="flex  flex-col items-center md:items-start gap-14  my-20">
      <div className="flex md:w-full   justify-between  ">

        <TitleDefault
          title="Meet out teachers"
          subTitle="KEY PERSON"
        />


        <div className=" flex gap-5 hidden md:flex">
          <button className="flex items-center rounded-full w-20 h-20 p-5 bg-white  border-2 border-slate-300 text-4xl text-slate-400">
            <IoIosArrowBack />
          </button>
          <button className="flex items-center rounded-full w-20 h-20 p-5 bg-[#524FD5] text-4xl">
            <IoIosArrowForward />
          </button>
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-14">
        <TeacherCard
          name="Christian Howard"
          content="Italian teacher"
          country={FlagItalian}
          image={ImageTeacherOne}
        />

        <TeacherCard
          name="Sandra Wilson"
          content="Spanish teacher"
          country={FlagISpanish}
          image={ImageTeacherTwo}
        />

        <TeacherCard
          name="Jimmy Cooper"
          content="Inglish teacher"
          country={FlagUk}
          image={ImageTeacherThree}
        />
      </div>



    </div>
  )
}
