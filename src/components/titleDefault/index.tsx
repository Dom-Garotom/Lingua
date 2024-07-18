interface TitleDefault{
    title : string;
    subTitle : string;
}

export default function TitleDefault( prop : TitleDefault ) {
    return (
        <div className="flex flex-col items-start ">
            <span className="text-gray-500 font-medium">{prop.subTitle}</span>
            <h2 className="text-5xl text-gray-950 font-light">{prop.title}</h2>
        </div>
    )
}
