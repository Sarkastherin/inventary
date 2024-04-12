import "./Buttons.css";
export function ButtonWithIcon({name, icon}) {
  return (
    <button className="btn-regular">
      <span className="name">{name}</span>
      <span className="icon">
        {icon}
      </span>
    </button>
  );
}

export function ButtonOutline({children, name, id}) {
  return (
    <button type="button" name={name} id={id}>
      {children}
    </button>
  )
}