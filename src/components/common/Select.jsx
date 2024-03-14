import { forwardRef } from 'react';

const Select = forwardRef(
  ({ options, handleOptionClick }, ref) => {
    return (
      <>
        <input readOnly ref={ref} />
        {options.map((item, index) => (
          <div
            key={`${item}_${index}`}
            onClick={() =>
              handleOptionClick(item)
            }
          >
            {item}
          </div>
        ))}
      </>
    );
  },
);

Select.displayName = Select;

export default Select;
