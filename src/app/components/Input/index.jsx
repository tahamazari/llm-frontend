import React from "react";

const Input = ({
  type = "text",
  label,
  value,
  placeholder = "type here...",
  onChange,
  onEnterPress,  // Add onEnterPress prop
  className,
  icon: Icon,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && onEnterPress) {
      onEnterPress(event);
    }
  };

  return (
    <div>
      {
        label &&
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      }
      <div className="relative">
        {Icon && <Icon className="absolute left-3 text-gray-400 h-7 w-7 shrink-0 top-[50%] translate-y-[-50%]" />}
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={handleKeyDown}  // Attach the handleKeyDown function
          value={value}
          className={`
            block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset px-3 py-4
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
            sm:text-sm sm:leading-6 ${Icon && 'pl-[52px]'} ${className}`
          }
        />
      </div>
    </div>
  );
};

export default Input;