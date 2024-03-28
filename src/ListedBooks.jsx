import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Local, Local1, Lol } from "./Local";
import Wish from "./Wish";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
    const data = useLoaderData()
    const [Data, setData] = useState([])
    const [Data1, setData1] = useState([])
    console.log(Data)
    useEffect(() => {
        const get = Local()
        const get1 = Local1()

        // const get=Local()
        if (data.length > 0) {
            const applid = data.filter(datas => get.includes(datas.bookId))
            const applid1 = data.filter(data => get1.includes(data.bookId))
            setData(applid)
            setData1(applid1)
            // console.log(data, get, applid)
        }
    }, [])
    const click=(tt)=>{
        console.log(Data,tt)

    }
    // const sorting=()=>{
    //     const data=Data.filter(dat=>dat.rating)
    //     console.log(data)
    //     if(data<)
    // }
    return (
        <div className="mt-10">
            <div className="font-bold text-3xl my-14">
                Books
            </div>
            <div>
                <details className="dropdown">
                    <summary className="m-1 btn hover:bg-green-600 bg-green-500 text-white rounded-2xl">Short By <IoIosArrowDown className="font-bold" />
</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>click("rating")} ><a>Rating</a></li>
                        <li><a>Numbers of pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
           
        
            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab  [--tab-border-color:lightgray] " aria-label="Read Books " />
                <div role="tabpanel" className="tab-content bg-base-100 border-2 border-base-300 rounded-box p-6">
                    {
                        Data1.map((d) => <Wish d={d}></Wish>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab [--tab-border-color:lightgray]" aria-label="Wishlist Books " checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                    {
                        Data.map((d) => <Wish d={d}></Wish>)
                    }

                </div>

            </div>
        </div>
    );
};

export default ListedBooks;