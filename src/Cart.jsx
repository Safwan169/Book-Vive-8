import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Cart = ({ datas }) => {
    const { image, bookName, publisher, author, rating, category, bookId } = datas
    const navigate=useNavigate()
    const detail=()=>{
        navigate(`/details/${bookId}`)
    }
    return (
        <div onClick={detail} className=" shadow-2xl px-8">
            <div className="card card-compact  bg-base-100 shadow-xl h-[400px] ">
                <figure><img className="w-[230px] h-[230px] bg-cover rounded-xl mt-6" src={image} alt="image" /></figure>
                <div className="card-body">
                    <div className="flex text-green-500 font-bold"><p>{category[0]}</p>
                        <p>{category[1]}</p>
                    </div>
                    <p className="text-2xl font-bold    text-start ml-4  ">{bookName}</p>
                    <div className=" font-bold  text-start ml-4 ">
                        By : {author}
                    </div>
                    <div className="font-semibold text-gray-400 flex  ml-4  ">
                        <p className="text-start">{publisher}</p>
                        <p className="flex  items-center justify-end gap-1"><span>{rating} </span><span className="text-black"><CiStar  /></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;