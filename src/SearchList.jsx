import React, { useContext } from 'react'
import { MyContext } from './Context/MyContext'
import Cards from './Cards'

export default function SearchList() {
    const { searchResult } = useContext(MyContext)
    return (
        <div>
            <ul className="grid  bg-slate-200 grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4     ">
                {searchResult ?
                    searchResult.map((beer) => (
                        <li key={beer.id} className="">
                            <Cards beer={beer} />
                        </li>
                    ))
                    :
                    <div className='text-3xl mt-10 pt-5'>no data found ...</div>
                }

            </ul>


        </div>
    )
}
