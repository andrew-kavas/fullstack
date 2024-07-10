const Clickable = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Clickable;
