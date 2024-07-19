import React from 'react';
import { useCakeContext} from '../../context/CakeProvider';
import CakeHistory from '../cake-history/CakeHistory';
import { PrinterIcon } from '@heroicons/react/24/solid';
import CakeRecipeForm from '../cake-recipe-form/CakeRecipeForm';

const CakeRecipePlanner = () => {
    const { printShoppingList } = useCakeContext()

    return(
        <div className="flex justify-center items-center mt-8">
            <div className="flex flex-col md:flex-row max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl space-y-8 md:space-y-0 md:space-x-3">
                <div className="w-full md:w-1/3 p-4 md:p-6 lg:p-8 max-h-80 mt-2 overflow-y-auto overflow-x-auto
                    max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-white bg-gray-600 bg-opacity-50 rounded-lg">
                    <CakeHistory />
                </div>
                <div className="w-full md:w-2/3">
                    <div className="flex items-start">
                        <button
                            type="button"
                            data-testid="print-shopping-list"
                            onClick={printShoppingList}
                            className="flex items-center mt-2 mb-3 ml-2 md:ml-3 lg:ml-4 bg-gray-400 hover:bg-gray-500
                                text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded"
                            >
                                <PrinterIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mr-2" />
                                Shopping List
                        </button>
                    </div>
                    <CakeRecipeForm/>
                </div>
            </div>
        </div>
    )
}

export default CakeRecipePlanner;