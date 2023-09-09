import React from 'react'
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import Filters from './Filters';



export default function Navbar() {

    return (
        <div className="fixed  w-full flex justify-evenly ">
            {/* homepage heading */}
            <Link to={"/"}>

                <h1 className="font-medium px-3 py-2 bg-white text-2xl">Beer List</h1>
            </Link>

            <SearchInput />

            <Filters />
        </div>

    )
}
