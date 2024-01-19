import {CDN_URL} from '../utils/constants.js';

const RestuarantCard = (props) =>{
    const {resData } = props;
    const {name, cuisines,costForTwo,avgRating,cloudinaryImageId, sla} = resData?.info;
    // const {deliveryTime}= resData?.info?.sla;
    return(
    <div className="m-4 p-4 w-[250px] h-auto rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <img className = "rounded-lg h-48" alt = "Burger" src={`${CDN_URL}${cloudinaryImageId}`} />
        <h3 className='font-bold py-4 text-lg'> {name}</h3>
        <h4 className="p-0.5">{cuisines.join(', ')}</h4>
        <h4 className="p-0.5">{costForTwo}</h4>
        <h4 className="p-0.5">{avgRating} stars</h4>
        <h4 className="p-0.5">{sla.slaString}</h4>
    </div>
    )
}


export const withPromotedLabel  = (RestuarantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestuarantCard  {...props} />
            </div>
        )
    }
}

export default RestuarantCard;