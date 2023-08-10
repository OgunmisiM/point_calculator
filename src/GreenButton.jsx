/* eslint-disable react/prop-types */
function GreenButton({ increment, answer, initialValue, green }) {
  const handleClick = () => {
    increment(initialValue);
  };
  return (
    <button onClick={handleClick} style={green}>
      {answer}
    </button>
  );
}
export default GreenButton;
