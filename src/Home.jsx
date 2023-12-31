import React, { useContext } from 'react'
import Cards from "./Cards";
import { MyContext } from './Context/MyContext';

export default function Home() {
    const { beers } = useContext(MyContext);

    return (
        <>
            <ul className="grid  bg-slate-200 grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4     ">
                {
                    beers.map((beer) => (
                        <li key={beer.id} className="">
                            <Cards beer={beer} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
