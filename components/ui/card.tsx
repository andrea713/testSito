import React from "react";
import clsx from "clsx"

type MyIconProps = React.SVGProps<SVGSVGElement>;


interface Props{
    className?:''
    icon?: React.FC<MyIconProps>,
    iconClassName?:'',
    title?:string,
    titleClassName?:''
    description?: string,
    descriptionClassName?:''
    

}

export default function Card({className,icon:Icon,iconClassName,title,titleClassName,description,descriptionClassName}: Props){

    return(
        <>
            <div className={clsx(className," flex items-center" )}>
                {Icon && <Icon className={clsx(iconClassName, "text-4xl mr-4")} />}

                <div className=" flex flex-col">
                        <span className={clsx(titleClassName," font-bold")}>{title}</span>
                        <span className={clsx(descriptionClassName," opacity-70")}>{description}</span>
                </div>
            </div>
        </>
    )
}