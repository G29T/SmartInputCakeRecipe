import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingList from '../shopping-list/ShoppingList';
import { useCakeContext } from '../../context/CakeProvider';

jest.mock('../../context/CakeProvider', () => ({
    useCakeContext: jest.fn(),
}));

describe('ShoppingList', () => {
    const shoppingList = {
        egg: 3,
        flour: 100,
        sugar: 50,
        milk: 200
    };

    const closeShoppingList = jest.fn();

    beforeEach(() => {
        useCakeContext.mockReturnValue({
            shoppingList,
            closeShoppingList,
        });
    });

    it('renders shopping list items', () => {
        render(<ShoppingList />);
        
        expect(screen.getByText('egg')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument(); 
        expect(screen.getByText('flour')).toBeInTheDocument();
        expect(screen.getByText('100 g')).toBeInTheDocument(); 
        expect(screen.getByText('sugar')).toBeInTheDocument();
        expect(screen.getByText('50 g')).toBeInTheDocument();
        expect(screen.getByText('milk')).toBeInTheDocument();
        expect(screen.getByText('200 ml')).toBeInTheDocument(); 
    });

    it('handles close shopping list', () => {
        render(<ShoppingList />);
        
        fireEvent.click(screen.getByTestId('close-shopping-list'));
        expect(closeShoppingList).toHaveBeenCalledWith(false);
    });
});
