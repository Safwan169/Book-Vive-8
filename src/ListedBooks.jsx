import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Local, Lol } from "./Local";
import Wish from "./Wish";


const ListedBooks = () => {
    const data = useLoaderData()
    const [Data, setData] = useState([])
    console.log(Data)
    useEffect(() => {
        const get = Local()

        // const get=Local()
        if (data.length > 0) {
            const applid = data.filter(datas => get.includes(datas.bookId))
            setData(applid)
            console.log(data, get, applid)
        }
    }, [])
    return (
        <div className="mt-10">
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab  [--tab-border-color:lightgray] " aria-label="Read Books " />
                <div role="tabpanel" className="tab-content bg-base-100 border-2 border-base-300 rounded-box p-6">
                    {
                        Data.map((d) => <Wish d={d}></Wish>)
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