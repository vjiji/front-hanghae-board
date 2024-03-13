const Select = ({
  options,
  selected,
  handleOptionClick,
}) => {
  return (
    <>
      <input value={selected} readOnly />
      {options.map((item, index) => (
        <div
          key={`${item}_${index}`}
          onClick={() => handleOptionClick(item)}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default Select;
