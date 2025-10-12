import clsx from "clsx";

export default function ContentSection(
    {
        children,
    }: {
        children: React.ReactNode,
    }){

    return(
        <div className={clsx(" relative max-w-[1400px] m-auto px-6 py-16 md:px-12 md:py-32")}>
        {children}
        </div>
    )
}