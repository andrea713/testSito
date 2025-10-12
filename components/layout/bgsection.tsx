


export default function BgSection(
    {children,
    }: {
        children: React.ReactNode,
    }){

    return(
        <div className=" absolute inset-0 max-w-[1920px] -z-40 m-auto">
            {children}
        </div>
    )
}