import { button } from './button.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { className, ...restProps } = props
    return <button className={`${className} ${button}`} {...restProps} />
}