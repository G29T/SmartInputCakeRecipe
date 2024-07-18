import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CakeRecipeForm from './CakeRecipeForm';
import { CakeProvider } from '../../context/CakeProvider';
import IngredientList from '../ingredient-list/IngredientList';
import { ingredientsData } from '../../data/ingredients-data';

const MockCakeProvider = ({ children }) => (
    <CakeProvider>{children}</CakeProvider>
  );

  let mockAlert;
beforeEach(() => {
    mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
});

afterEach(() => {
    mockAlert.mockRestore();
});


describe('CakeRecipeForm', () => { 
    test('it renders the Add Ingredient and Add Cake buttons', () => {
        render(<CakeRecipeForm />);

        const addIngredientButton = screen.getByTestId('add-ingredient');
        const addCakeButton = screen.getByTestId('add-cake');

        expect(addIngredientButton).toBeInTheDocument();
        expect(addCakeButton).toBeInTheDocument();
    });

    test('it renders IngredientList component', () => {
        render(<CakeRecipeForm />);

        const ingredientList = screen.getByTestId('ingredient-list-0');
        expect(ingredientList).toBeInTheDocument();
    });

    test('it adds an ingredient when Add Ingredient button is clicked', () => {
        render(<CakeRecipeForm />);
    
        fireEvent.click(screen.getByTestId('add-ingredient'));
    
        const ingredientSelect0 = screen.getByTestId('ingredient-list-0');
        expect(ingredientSelect0).toBeInTheDocument(); 

        const ingredientSelect1 = screen.getByTestId('ingredient-list-1');
        expect(ingredientSelect1).toBeInTheDocument();

        const ingredientSelect2 = screen.queryByTestId('ingredient-select-2');
        expect(ingredientSelect2).not.toBeInTheDocument();
    });
    
    test('it renders quantity input and select fields', () => {
        render(<IngredientList index={0} ingredients={ingredientsData} handleIngredientSelect={() => {}} />);
    
        const quantityInput = screen.getByTestId('ingredient-quantity-0');
        const ingredientSelect = screen.getByTestId('ingredient-select-0');
    
        expect(quantityInput).toBeInTheDocument();
        expect(ingredientSelect).toBeInTheDocument();
      });

    test('it handles ingredient selection', () => {
        const mockHandleIngredientSelect = jest.fn();
        render(<IngredientList index={0} ingredients={ingredientsData} handleIngredientSelect={mockHandleIngredientSelect} />);
    
        fireEvent.change(screen.getByTestId('ingredient-quantity-0'), { target: { value: '200' } });
        fireEvent.change(screen.getByTestId('ingredient-select-0'), { target: { value: 'flour' } });
    
        expect(mockHandleIngredientSelect).toHaveBeenCalledWith(0, 'quantity', '200');
        expect(mockHandleIngredientSelect).toHaveBeenCalledWith(0, 'ingredient', 'flour');
    });

    test('it submits the form successfully', async () => {
        render(<CakeRecipeForm />, { wrapper: MockCakeProvider });

        const cakeNameInput = screen.getByPlaceholderText('Cake Name');
        fireEvent.change(cakeNameInput, { target: { value: 'Red Velvet Cake' } });

        const submitButton = screen.getByTestId('add-cake');
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith('Cake added successfully');
        });
    });
})