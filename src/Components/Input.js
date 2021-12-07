export default function Input({type, name, id, className, value}) {
    return (
        <input type={type} value={value} className={className} name={name} id={id} />
    )
}