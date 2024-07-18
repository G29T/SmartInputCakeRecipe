import React from 'react'
import { useCakeContext } from '../../context/CakeProvider'
import { v4 as uuidv4 } from 'uuid';
import { XMarkIcon } from '@heroicons/react/24/solid';


export const ShoppingList = () => {
    const { shoppingList, closeShoppingList } = useCakeContext()

    const displayMetric = (ingredient) => {
        if (ingredient === 'egg' || ingredient === "vanilla pod") {
            return '';
        } else if (ingredient === 'milk' || ingredient === 'heavy cream' || ingredient === 'unicorn tears' || ingredient === 'grand marnier') {
            return ' ml';
        } else {
            return ' g';
        }
    };

    return (
        <div className="relative max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto mb-32 p-4 border border-white bg-gray-600 bg-opacity-50 rounded-lg">
             <button
                type="button"
                data-testid="close-shopping-list"
                onClick={() =>  closeShoppingList(false)}
                className="absolute top-2 right-2 text-white cursor-pointer"
            >
                <XMarkIcon className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"/>
            </button>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-bold mb-4">Shopping list</p>
            {Object.entries(shoppingList || {})
                .map(([ingredient, quantity]) => (
                    <div key={uuidv4()} className="flex justify-between items-center">
                        <p className="text-white font-bold text-base md:text-lg lg:text-xl">{ingredient}</p>
                        <p className="text-white font-bold text-base md:text-lg lg:text-xl">{quantity}{displayMetric(ingredient)}</p>
                    </div>
                ))
            }  
        </div>
    )

}

export default ShoppingList;