interface Props {
  children: string;
  color?: string;
  onClick: () => void;
  idTag: string;
}
const Button = ({ children, onClick, color = "primary", idTag }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} id={idTag}>
      {children}
    </button>
  );
};

export default Button;
