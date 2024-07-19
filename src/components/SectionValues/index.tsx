import CardValues from "./cardValues"
import ImageTwo from "../../../public/GlassTwo.svg"
import ImageOne from "../../../public/GlassOne.svg"
import ImageTree from "../../../public/Glassthree.svg"





function SectionValues() {
  return (
    <div className="flex flex-col items-center gap-20 my-32 ">

      <div className="flex flex-col items-center ">
        <span className="text-gray-500 font-medium">WHY CHOOSE US</span>
        <h2 className="text-5xl text-gray-950 font-light">Our Values</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-22 lg:gap-[6.5rem] ">
        <CardValues
          title="Speaking clubs"
          content="In our school you will practice your speaking skills and just get a lot of positive emotions!"
          image={ImageTwo}
        />
        <CardValues
          title="Speaking clubs"
          content="In our school you will practice your speaking skills and just get a lot of positive emotions!"
          image={ImageOne}
        />
        <CardValues
          title="Speaking clubs"
          content="In our school you will practice your speaking skills and just get a lot of positive emotions!"
          image={ImageTree}
        />
      </div>


    </div>
  )
}

export default SectionValues
