export function Button2({href, children, className = ''}: {href: string, children: React.ReactNode, className?: string}) {
    return(
        <a href={href} className={`${className} py-[10px] px-3 rounded-md btn2-mpf border-2`}>{children}</a>
    );
}

export function Button1({href, children, className = ''}: {href: string, children: React.ReactNode, className?: string}) {
    return(
        <a href={href} className={`${className} py-[12px] px-3 rounded-md btn1-mpf`}>{children}</a>
    );
}