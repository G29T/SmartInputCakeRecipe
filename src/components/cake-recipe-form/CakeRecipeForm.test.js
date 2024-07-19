import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CakeRecipeForm from './CakeRecipeForm';
import { CakeProvider, useCakeContext } from '../../context/CakeProvider';

const MockCakeProvider = ({ children }) => {
    const value = useCakeContext();
    return <CakeProvider value={value}>{children}</CakeProvider>;
};


jest.mock('../../context/CakeProvider', () => {
    const originalModule = jest.requireActual('../../context/CakeProvider');
    return {
        ...originalModule,
        useCakeContext: jest.fn(),
    };
});

let mockAlert;
beforeEach(() => {
    mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
});

afterEach(() => {
    mockAlert.mockRestore();
});

describe('CakeRecipeForm', () => { 

    const updateCakes = jest.fn();
    const displayShoppingList = false;

    beforeEach(() => {
        useCakeContext.mockReturnValue({
            updateCakes,
            displayShoppingList,
        });
    });

    test('it renders form inputs and buttons', () => {
        render(
            <MockCakeProvider>
                <CakeRecipeForm />
            </MockCakeProvider>
        );

        expect(screen.getByTestId('cake-name')).toBeInTheDocument();
        expect(screen.getByTestId('ingredients-formula')).toBeInTheDocument();
        expect(screen.getByTestId('add-cake')).toBeInTheDocument();
    });

    test('it handles form submission', async () => {
        render(
            <MockCakeProvider>
                <CakeRecipeForm />
            </MockCakeProvider>
        );

        fireEvent.change(screen.getByTestId('cake-name'), { target: { value: 'Red Velvet Cake' } });
        fireEvent.change(screen.getByTestId('ingredients-formula'), { target: { value: '[100g] * [flour] + [150g] * [sugar] + [200ml] * [milk]' } });
        fireEvent.submit(screen.getByTestId('add-cake'));

        const [[updateObject]] = updateCakes.mock.calls;

        const cakeKey = Object.keys(updateObject)[0];
        
        expect(cakeKey).toMatch(/^cake_\d+$/);
        expect(updateObject[cakeKey]).toEqual({
            name: 'Red Velvet Cake',
            ingredients: [
                { quantity: '100', ingredient: 'flour' },
                { quantity: '150', ingredient: 'sugar' },
                { quantity: '200', ingredient: 'milk' }
            ]
        });

    });

    test('it submits the form successfully', async () => {
        render(
            <MockCakeProvider>
                <CakeRecipeForm />
            </MockCakeProvider>
        );

        fireEvent.change(screen.getByTestId('cake-name'), { target: { value: 'Red Velvet Cake' } });
        fireEvent.change(screen.getByTestId('ingredients-formula'), { target: { value: '[3] * [egg] + [150g] * [sugar] + [200ml] * [milk]' } });
        fireEvent.submit(screen.getByTestId('add-cake'));

        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith('Cake added successfully');
        });

    });
})