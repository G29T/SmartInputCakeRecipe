import React, { useState, useEffect } from 'react';
import { useCakeContext} from '../../context/CakeProvider';
import { ingredientsData } from '../../data/ingredients-data';
import Input from '../input/Input';

const CakeRecipeForm = () => {

    const { updateCakes, displayShoppingList } = useCakeContext()
    const [cakeName, setCakeName] = useState('');
    const [cakeIngredients, setCakeIngredients] = useState([]);
    const [ingredientsFormula, setIngredientsFormula] = useState('');
    const [isFormulaValid, setIsFormulaValid] = useState(false);
    const formStyle = "max-w-md ml-2 md:ml-3 lg:ml-4 p-4 md:p-6 lg:p-8 border border-white bg-gray-600 bg-opacity-50 rounded-lg" ;
    const formConditionalStyle = displayShoppingList ? "mb-14" : "mb-32";
    
    const handleIngredientsFormula = (formula) => {
        const regex =  /\[(\d+)([a-zA-Z\s]*)\]\s*\*\s*\[([a-zA-Z\s]+)\]/g;
        const ingredients = [];
        const storedIngredients = ingredientsData.map(ingredient => ingredient.name);
        let ingredientMatch;

        while ((ingredientMatch = regex.exec(formula)) !== null) {
            const quantity = ingredientMatch[1];
            const unit = ingredientMatch[2].trim();
            const ingredientName = ingredientMatch[3].trim();
    
            if (!storedIngredients.includes(ingredientName)) {
                alert(`Ingredient "${ingredientName}" does not exist`);
                return false;
            }

            if (!unit && ingredientName.toLowerCase() !== 'egg' && ingredientName.toLowerCase() !== 'vanilla pod') {
                alert(`Missing measurement unit for ingredient "${ingredientName}"`);
                return false;
            }

            if (unit && ( ingredientName.toLowerCase() === 'egg' || ingredientName.toLowerCase() === 'vanilla pod')) {
                alert(`There shouldn't be a measurement unit for ingredient "${ingredientName}"`);
                return false;
            }

            if ((ingredientName.toLowerCase() === 'milk' || ingredientName.toLowerCase() === 'heavy cream'
                || ingredientName.toLowerCase() === 'unicorn tears' || ingredientName.toLowerCase() === 'grand marnier') && unit !== 'ml') {
                alert(`${ingredientName} should be measured in ml`);
                return false;
            } 
            
            if (ingredientName.toLowerCase() !== 'milk' && ingredientName.toLowerCase() !== 'heavy cream'
                && ingredientName.toLowerCase() !== 'unicorn tears' && ingredientName.toLowerCase() !== 'grand marnier' 
                && ingredientName.toLowerCase() !== 'egg' && ingredientName.toLowerCase() !== 'vanilla pod' && unit !== 'g') {
                    
                alert(`${ingredientName} should be measured in g`);
                return false;
            }

            ingredients.push({
                quantity: quantity,
                ingredient: ingredientName
            });
        }

        const fullMatch = formula.replace(/[ +]/g, '').match(regex);
        const fullFormulaLength = fullMatch ? fullMatch.reduce((acc, cur) => acc + cur.length, 0) : 0;
        
        if (!fullMatch || fullFormulaLength !== formula.replace(/[ +]/g, '').length) {
            alert('Invalid formula format. Please use the format like [5] * [egg] + [1] * [vanilla pod] + [100g] * [sugar]');
            return false;
        }
        
        setCakeIngredients(ingredients);
        return true;
    };

    const handleFormulaChange = (value) => {
        setIngredientsFormula(value);
    };

    useEffect(() => {
        if (isFormulaValid) {
            const cakeId = `cake_${Date.now()}`;
            updateCakes({ [cakeId]: { name: cakeName, ingredients: cakeIngredients } });
            setCakeName('');
            setIngredientsFormula('');
            setCakeIngredients([]);
            alert('Cake added successfully');
        }
    }, [isFormulaValid]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = handleIngredientsFormula(ingredientsFormula);
        if (isValid) {
            setIsFormulaValid(true);
        }
    }

    return(
        <>
            <form
                className={`${formStyle} ${formConditionalStyle}`}
                onSubmit={handleSubmit}
            >
                <p className="text-white text-center text-lg md:text-xl lg:text-2xl font-bold mb-4">What are you cooking today?</p>
                <Input
                    type="text"
                    placeholder="Cake Name"
                    value={cakeName}
                    onChange={(e) => setCakeName(e.target.value)}
                    required={true}
                />
               <Input
                    type="text"
                    placeholder="Ingredients: [5] * [egg] + [5g] * [jam]"
                    value={ingredientsFormula}
                    onChange={(e) => handleFormulaChange(e.target.value)}
                    required={true}
                /> 
                <button
                    type="submit"
                    data-testid="add-cake"
                    className="bg-blue-500 hover:bg-blue-600 text-white mt-3 md:mt-4 lg:mt-5 px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-md"
                >
                    Add Cake
                </button>
            </form>
        </>
    )
}

export default CakeRecipeForm;