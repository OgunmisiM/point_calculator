/* eslint-disable react/prop-types */
function Button({ increment, answer, initialValue, orange }) {
  const handleClick = () => {
    increment(initialValue);
  };
  return (
    <button onClick={handleClick} style={orange}>
      {answer}
    </button>
  );
}
export default Button;
