import BgSection from "./layout/bgsection"



export default function Section(
    {children,
        imgBg,
        BgSection,
        
    }: {
        children: React.ReactNode,
        imgBg?: React.ReactNode,
        BgSection?: React.ReactNode
    }){

    return(
        <section>
            <div className=" relative -z-50 " >
          
                <div className=" absolute inset-0 max-w-[1920px] -z-40 m-auto">
                    {imgBg}
                </div>

                <div className=" relative z-10 max-w-[1400px] m-auto px-6 py-16 sm:px-12 sm:py-32">
                    {children}
                </div>
            </div>
        </section>
    )
}