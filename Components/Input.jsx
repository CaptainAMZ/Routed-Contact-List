const Input = ({
  needLabel = true,
  label = "label",
  placeHolder = "placeholder",
  value,
  handler,
}) => {
  return (
    <div
      className="w-[80%] 
    flex 
    flex-col 
    gap-2 
    rounded-lg
    "
    >
      {needLabel && (
        <label
          className="
        text-black 
        font-medium 
        text-lg
        "
          htmlFor={`#${label}`}
        >
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={(e) => handler(e.target.value)}
        className="rounded-lg 
        p-2 
        outline-none 
        focus:border-black 
        border-2 
        text-black 
        font-medium 
        text-lg
      bg-[#D9D9D9]
      placeholder:text-[rgba(0,0,0,.5)]
        "
        id={label}
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
