import { TiThMenuOutline } from 'react-icons/ti';

const Menu = ({
  current,
  onChange,
  options,
  setShowMenu,
  showMenu,
}: {
  current: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  setShowMenu: (value: boolean) => void;
  showMenu: boolean;
}) => {
  return (
    <>
      <div className="hidden md:flex flex-col w-screen content-center bg-gray-100 p-8">
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

      <div className="flex md:hidden   items-center ">
        <div
          className="bg-white border rounded-3xl  p-3 border-gray-500 shadow-lg flex  h-max mr-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <TiThMenuOutline size={26} color="black" />
        </div>
      </div>
    </>
  );
};

export { Menu };
