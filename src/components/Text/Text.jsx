const Text = (props) => {
  console.log(props.text);
  return (
    <div>
      <p>{props.apple}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default Text;
