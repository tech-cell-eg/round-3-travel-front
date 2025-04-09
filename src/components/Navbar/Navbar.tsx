
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import NavIcon from '../../assets/navImgs/logo-1.svg.png';
import { MenuItem } from 'primereact/menuitem';
import { Link, useLocation } from 'react-router-dom';

export default function TemplateDemo() {
    const location = useLocation();

    const itemTemplate = (item: MenuItem) => {

        if (!item.label) return null;
        return (
            <Link
        // to={`/${item.label.toLowerCase()}`} 
        to={'/'}
        className={` px-5 lg:px-8 py-2 text-mainTextColor
          hover:!bg-navHover
          rounded
          transition duration-200
          max-md:pt-2
          cursor-pointer
          select-none
          ${location.pathname === `/${item.label.toLowerCase()}` ? 'bg-navActive' : ''}
          `} 
      >
        {item.label}
      </Link>
        );
    };
    
    const items = [
        {
            label: 'Destinations',
            template: itemTemplate
        },
        {
            label: 'Activities',
            template: itemTemplate
        },
        {
            label: 'USD',
            template: itemTemplate
        },
        
    ];

    const start =
       <div className="flex align-items-center gap-4">
            <Link to="/">
                <img alt="logo"  src={NavIcon} height="40" className="mr-2 md:w-auto w-[80px] min-h-[30px] cursor-pointer" />
            </Link>
            <InputText
                placeholder="Search destination or activity"
                type="text"
                className="w-8rem sm:w-auto     md:me-22  md:ms-8 xl:ms-22 mx-2  md:pe-5  pe-1 ps-1 text-textGrayInputs max-md:text-sm"
            />
        </div>
    

    return (
        <div className="">
            <Menubar  
            pt={{content:{className:"!bg-transparent"}}}
            model={items} 
            start={start}  
            className="bg-transparent pt-5 xl:ps-44 md:ps-22  max-md:px-4 "/>
        </div>
    )
}
        