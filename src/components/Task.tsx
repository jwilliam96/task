
interface Props {
    className?: string
}


export default function Task({ className }: Props) {
    return (
        <div className={`h-11 flex items-center gap-3 text-app-text-primary ${className}`}>
            <div className='border border-app-border-circle size-6 rounded-full shrink-0'></div>
            <p className="w-full">Texto</p>
            <img src="/images/icon-cross.svg" alt="icono de x" />
        </div>
    )
}
