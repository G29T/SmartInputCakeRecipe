import { useCakeContext} from '../../context/CakeProvider'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const CakeHistory = () => {
    const { cakes, deleteCake, editCakeName } = useCakeContext();

    return(
        <>
            <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold mb-4">Cake History</p>
            <ul className="divide-y divide-gray-200">
                {Object.keys(cakes).map(cakeKey => (
                    <li key={cakeKey} className="flex py-2 text-white">
                        <span className='mr-2 text-sm md:text-base lg:text-lg'>{cakes[cakeKey].name}</span>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                className="text-white hover:text-gray-300"
                                onClick={() => editCakeName(cakeKey)}
                                
                            >
                                <PencilIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-1" />
                            </button>
                            <button
                                type="button"
                                className=" text-white hover:text-gray-300 "
                                onClick={() => deleteCake(cakeKey)}
                            >
                                <TrashIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CakeHistory;