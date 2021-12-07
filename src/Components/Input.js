export default function Input({type, name, id, className, value, placeholder}) {
    return (
        <input type={type} value={value} className={className} name={name} id={id} placeholder={placeholder} />
    )
}