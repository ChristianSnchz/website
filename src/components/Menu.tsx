const Menu = ({
  current,
  onChange,
  options,
}: {
  current: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}) => {
  return (
    <div className="flex flex-col w-screen content-center bg-gray-100 p-8">
      <div className="flex flex-row  items-center  gap-4">
        {options.map((option) => (
          <a href="#" onClick={() => onChange(option.value)}>
            <p
              className={`font-mono text-xs ${
                option.value === current && 'font-bold'
              }  `}
            >
              {option.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export { Menu };
