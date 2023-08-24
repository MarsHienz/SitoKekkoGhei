import { ReactSVG } from 'react-svg';
import RicercaSvg from '../public/svg1.svg';
import UtenteSvg from '../public/svg2.svg';

export default function Nav()
{

    return (

        <div id="navbar" className="text-gray-200 w-full flex pt-6 items-center justify-end ">

            <div className="flex  items-center">
                <div className="cursor-pointer justify-between mr-16 flex font-bold">
                    <div className="transition duration-300 hover:text-white px-6"><p>Our Services</p></div>
                    <div className="transition duration-300 hover:text-white px-6"><p>Plant Care</p></div>
                    <div className="transition duration-300 hover:text-white px-6"><p>Pricing</p></div>
                    <div className="transition duration-300 hover:text-white px-6"><p>About</p></div>
                </div>

                <div className="flex">
                    <ReactSVG src={RicercaSvg} className="hover:scale-110 hover:opacity-100 opacity-70 transition-transform fill-gray-200 cursor-pointer mr-6 w-8 h-8"/>
                    <ReactSVG src={UtenteSvg} className="hover:scale-110 hover:opacity-100 transition-transform opacity-70 fill-black cursor-pointer mr-6 w-8 h-8 bg-green-300 rounded-full "/>

                        </div>
            </div>
        </div>

    )
}


