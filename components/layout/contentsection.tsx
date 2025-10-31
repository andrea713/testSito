import clsx from "clsx";

export default function ContentSection(
    {
        children,
        className,
    }: {
        children: React.ReactNode,
        className?: string
    }){

    return(
        <div className={clsx(" relative max-w-[1400px] m-auto px-6 py-16 md:px-12 md:py-32 z-0", className)}>
        {children}
        </div>
    )
}