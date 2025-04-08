
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import NavIcon from '../../assets/logo-1.svg.png';
import { MenuItem } from 'primereact/menuitem';
import { Link } from 'react-router-dom';

export default function TemplateDemo() {

    const itemTemplate = (item: MenuItem) => {

        return (
            <a 
            className={`px-8 py-2 text-mainTextColor
                hover:!bg-navHover 
                active:!bg-navActive
                rounded 
                transition duration-200 
                cursor-pointer
                select-none `}>
                {item.label}
            </a>
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
                <img alt="logo" src={NavIcon} height="40" className="mr-2 cursor-pointer" />
            </Link>
            <InputText
                placeholder="Search destination or activity"
                type="text"
                className="w-8rem sm:w-auto md:me-52 md:ms-22 pe-5 ps-1 text-textGrayInputs"
            />
        </div>
    

    return (
        <div className="">
            <Menubar  
            model={items} 
            start={start}  
            className="bg-transparent pt-8  ps-44"/>
        </div>
    )
}
        