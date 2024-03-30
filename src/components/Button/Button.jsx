const Button = (props) => {
  return (
    <div>
      <button>
        {props.title}
        {props.count}
      </button>
    </div>
  );
};

export default Button;
