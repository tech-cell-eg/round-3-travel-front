
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import NavIcon from '../../assets/navImgs/logo-1.svg.png';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/list?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const itemTemplate = (item: MenuItem) => {
    if (!item.label) return null;
    return (
      <Link
        to="/list"
        className={`px-5 lg:px-8 py-2 text-mainTextColor
          hover:!bg-navHover
          rounded transition duration-200
          max-md:pt-2 cursor-pointer select-none
          ${location.pathname === `/${item.label.toLowerCase()}` ? 'bg-navActive' : ''}`}
      >
        {item.label}
      </Link>
    );
  };

  const items = [
    { label: 'Destinations', template: itemTemplate },
    { label: 'Activities', template: itemTemplate },
    { label: 'USD', template: itemTemplate }
  ];

  const start = (
    <div className="flex items-center gap-4">
      <Link to="/">
        <img
          alt="logo"
          src={NavIcon}
          height="40"
          className="mr-2 md:w-auto w-[80px] min-h-[30px] cursor-pointer"
        />
      </Link>
      <div className="relative flex items-center">
        <InputText
          placeholder="Search destination or activity"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="w-8rem sm:w-2rem py-1 md:me-22 md:ms-8 xl:ms-22 mx-2 md:pe-5 pe-2 ps-1 text-textGrayInputs 
           max-md:text-sm rounded-lg focus:border  border-borderGrayInputs focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {searchTerm.trim() && (
          <Button
            label="Search"
            onClick={handleSearch}
            className="absolute right-[-1px] lg:right-[-10px] md:right-[-1px] ltext-sm px-1 py-1 text-sm max-md:font-normal md:px-3 md:py-2 
            bg-bgButtonOrange text-white rounded-lg hover:bg-white hover:border hover:border-bgButtonOrange hover:text-bgButtonOrange"
          />
        )}
      </div>
    </div>
  );

  return (
    <div>
      <Menubar
        pt={{ content: { className: "!bg-transparent" } }}
        model={items}
        start={start}
        className="bg-transparent pt-5 xl:ps-44 md:ps-22 max-md:px-4 "
      />
    </div>
  );
}