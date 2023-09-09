import React from 'react'

export default function Cards(props) {
    function getShortDescription(description) {
        const shortDescription = description.slice(0, 15);
        return {shortDescription}
      }
    return (
        <div class="max-w-sm rounded overflow-hidden  shadow-lg">
            <div className='flex justify-center '>

            <img class="w-10" src={props.beer.image_url} alt="" />
            </div>
            <div className='px-4 py-1'>

                <div class="font-bold text-xl mb-2">{props.beer.name}</div>
            </div>
            <div class="px-6 py-4 h-44 overflow-scroll">

                <p class="text-gray-700 text-base">
                    {props.beer.description}...
                </p>
            </div>

        </div>
    )
}
