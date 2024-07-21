import { input } from './input.css'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className, ...restProps } = props
    return <input className={`${className} ${input}`} {...restProps} />
}