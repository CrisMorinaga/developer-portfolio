type Props = {
    list: string[] | undefined,
    title: string
}

export default function StackInfo({list, title}: Props) {

    return(
        <div className="container border rounded-md dark:border-light border-dark p-3">
            <p className="dark:text-primaryDark text-primary text-md text-start">{title}</p> 
            {list?.map((word, index) => (
                <ul key={index} className="my-2 font-medium md:text-base text-xs text-dark dark:text-light text-start">
                    <li>{word}</li>
                </ul>
            ))}
        </div>
    )
}