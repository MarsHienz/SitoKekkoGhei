import { ReactSVG } from 'react-svg';
import FacebookSvg from '../public/svg4.svg';
import InstagramSvg from '../public/svg5.svg';
import TwitterSvg from '../public/svg6.svg';
export default function Social()
{
    return (

        <div className=" w-full flex justify-end absolute bottom-12 right-28">

            <ReactSVG src={FacebookSvg} className="hover:scale-110 fill-gray-200 cursor-pointer mr-6 w-8 h-8" />
            <ReactSVG src={InstagramSvg} className="hover:scale-110 fill-gray-200 cursor-pointer mr-6 w-8 h-8" />
            <ReactSVG src={TwitterSvg} className="hover:scale-110 fill-gray-200 cursor-pointer mr-6 w-8 h-8" />


        </div>

    )
}