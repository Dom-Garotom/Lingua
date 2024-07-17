
interface ButtonDefaultProp {
    content: string;
    color: string;
    bg: string
    onClick?: any;
}

function ButtonDefault(prop: ButtonDefaultProp) {
    return (
        <button className={`w-[148px] h-[52px]  rounded-3xl text-lg font-semibold  ${prop.bg} ${prop.color}
        `}>
            {prop.content}
        </button>
    )
}

export default ButtonDefault;