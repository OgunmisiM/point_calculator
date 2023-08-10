/* eslint-disable react/prop-types */
function Redbutton({ increment, answer, initialValue, red }) {
  const handleClick = () => {
    increment(initialValue);
  };
  return (
    <button onClick={handleClick} style={red}>
      {answer}
    </button>
  );
}
export default Redbutton;
