interface Props {
  children: string;
  color?: string;
  idTag: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color = "light", idTag }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} id={idTag}>
      {children}
    </button>
  );
};

export default Button;
