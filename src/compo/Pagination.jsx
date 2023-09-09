import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext';

export default function Pagination() {
    const {setPage , page}= useContext(MyContext);
  return (
    <div className="flex justify-center m-5  ">
    <ul class="inline-flex -space-x-px text-sm">
        <li>
            <div
                onClick={() => setPage(page - 1)}
                class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Previous
            </div>
        </li>
        <li>
            <div
                onClick={() => {
                    setPage(1);
                }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                1
            </div>
        </li>
        <li>
            <div
                onClick={() => {
                    setPage(2);
                }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                2
            </div>
        </li>
        <li>
            <div
                onClick={() => {
                    setPage(3);
                }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                3
            </div>
        </li>
        <li>
            <div
                onClick={() => {
                    setPage(4);
                }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                4
            </div>
        </li>
        <li>
            <div
                onClick={() => {
                    setPage(5);
                }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                5
            </div>
        </li>

        <li>
            <div
                href="#"
                onClick={() => {
                    setPage(page + 1);
                }}
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Next
            </div>
        </li>
    </ul>
</div>
  )
}
