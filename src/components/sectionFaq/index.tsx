import Image from "next/image"
import ImageStudent from "../../../public/Mask(3).png"
import FlagSpanish from "../../../public/flag-Spanish.png"
import { FaPlus } from "react-icons/fa6";
import FaqCard from "./faqCard";
import TitleDefault from "../titleDefault";





function SectionFaq() {

    const faqs = [
        {
            id: 1,
            question: "How can I know my level of knowledge?",
            answer: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
        },
        {
            id: 2,
            question: "Can I do it individually or only in a group?",
            answer: "You can choose to do it individually or in a group. We offer both options to accommodate different learning preferences."
        },
        {
            id: 3,
            question: "What is the maximum group size?",
            answer: "The maximum group size is 10 students. This allows for an interactive and engaging learning environment while ensuring individual attention."
        },
        {
            id: 4,
            question: "Do I need to buy materials for lessons?",
            answer: "No, all necessary materials for the lessons are provided by us. You only need a computer and an internet connection."
        },
        {
            id: 5,
            question: "Are you adjusting to the student's schedule?",
            answer: "Yes, we offer flexible scheduling to accommodate the student's availability. Our goal is to make learning as convenient as possible for you."
        }
    ];

    return (
        <div className="flex flex-col   items-center  gap-20 my-32 ">

            <TitleDefault
                title="Common questions"
                subTitle="MORE INFO"
            />

            <div className="flex w-full flex-wrap items-center md:px-0  justify-between gap-10 ">
                {
                    faqs.map( item => (
                        <FaqCard
                            key={item.id}
                            title={item.question}
                            content={item.answer}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default SectionFaq
