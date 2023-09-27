import { useEffect, useState } from "react";
import Card from "./Card";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    useEffect(()=>{
        const allData = useLoaderData;
        setData(allData);
        setNewData(allData);
    }, [])
    const handleSearchBar = () =>{
        const searchText = document.getElementById("search").value.toLowerCase();
        if(searchText !== ""){
            const categoryText = data.filter(donation => donation.category.toLowerCase() === searchText)
            setNewData(categoryText)
        }
        else{
            setNewData(data)
        }
    }
    return (
        <div>
            <div className="min-h-[70vh]">
            <section className="w-max mx-auto pt-[25vh]">
                <h2 className="text-2xl md:text-4xl font-bold mb-8">I Grow By Helping People In Need</h2>
                <div className="flex justify-between w-80 md:w-96 mx-auto">
                <input id="search" className="border pl-2 py-1 md:py-2 rounded-s-md grow" type="text" placeholder="Search here..." />
                <button onClick={handleSearchBar} className="rounded-e-md py-1 md:py-2 bg-red-500 px-4 text-white">Search</button>
                </div>
            </section>
        </div>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto w-fit gap-5 mb-10">
                {
                    newData.map(card => <Link key={card.id} to={`/details/${card.id}`}><Card key={card.id} card={card}></Card></Link>)
                }
        </section>
        </div>
    );
};

export default Home;