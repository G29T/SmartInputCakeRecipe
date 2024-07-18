import React, { useContext, createContext, useState, useCallback } from 'react'

export const CakeContext = createContext({ 
    cakes: {},
    shoppingList: {}, 
    displayShoppingList: false,
    deleteCake: (data) => {},
    editCakeName: (data) => {},
    updateCakes: (data) => {},
    printShoppingList: () => {},
    setDisplayShoppingList: () => Boolean
})

export const CakeProvider = ({ children}) => { 
    const [cakes, setCakes] = useState({});
    const [shoppingList, setShoppingList] = useState({});
    const [displayShoppingList, setDisplayShoppingList] = useState(false);

    const deleteCake = useCallback((cakeId) => { 
        const updatedCakes = { ...cakes };
        delete updatedCakes[cakeId];
        setCakes(updatedCakes);
        setDisplayShoppingList(false);
    }, [cakes]);

    const editCakeName = useCallback((cakeId) => { 
        const newCakeName = prompt('Enter new cake name:');
        if (newCakeName) {
            setCakes((prevCakes) => ({
                ...prevCakes,
                [cakeId]: {
                    ...prevCakes[cakeId],
                    name: newCakeName
                }
            }));
        }
    }, []);

    const updateCakes = useCallback((data) => { 
        setCakes((prev) => ({  ...prev, ...data}) );
        setDisplayShoppingList(false);
    }, []);


    const printShoppingList = useCallback(() => {
        
        const isEmpty = Object.keys(cakes).length === 0;

        if(!isEmpty){ 
            const ingredientMap = {};
       
            Object.values(cakes).map(item => item.ingredients).flat().forEach(ingredient => { 
                const { ingredient: ingredientName, quantity } = ingredient;
                if (ingredientMap[ingredientName]) {
                    ingredientMap[ingredientName] += parseInt(quantity || '0')
                } else {
                    ingredientMap[ingredientName] = parseInt(quantity || '0');
                }
            })

            setShoppingList(ingredientMap);
            setDisplayShoppingList(true);
        } else {
            setDisplayShoppingList(false);
            alert("You must introduce a cake first");
        }
    
    }, [cakes]);

    const closeShoppingList = useCallback(() => { 
       setDisplayShoppingList(false);
    }, []);
    
    return ( 
        <CakeContext.Provider value={{ cakes, deleteCake, editCakeName, updateCakes, shoppingList, printShoppingList, displayShoppingList, closeShoppingList }}>{children}</CakeContext.Provider>
    )
}

export const useCakeContext = () => useContext(CakeContext)