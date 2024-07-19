import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CakeRecipePlanner from './CakeRecipePlanner';
import { useCakeContext } from '../../context/CakeProvider';

jest.mock('../../context/CakeProvider', () => ({
  useCakeContext: jest.fn(),
}));

describe('CakeRecipePlanner', () => {

  it('it renders components correctly', () => {

    const mockPrintShoppingList = jest.fn();
    const mockContextValue = {
      cakes: {},
      shoppingList: {},
      displayShoppingList: false,
      printShoppingList: mockPrintShoppingList,
    };

    useCakeContext.mockReturnValue(mockContextValue);

    render(<CakeRecipePlanner />);

    expect(screen.getByText('Cake History')).toBeInTheDocument();
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
    expect(screen.getByText('What are you cooking today?')).toBeInTheDocument();
  });

  it('it handles print shopping list button click', () => {

    const mockPrintShoppingList = jest.fn();
    const mockContextValue = {
      cakes: { cake1: { name: 'Red Velvet Cake', ingredients: [{ ingredient: 'egg', quantity: 8 }] } },
      shoppingList: {},
      displayShoppingList: false,
      printShoppingList: mockPrintShoppingList,
    };

    useCakeContext.mockReturnValue(mockContextValue);

    render(<CakeRecipePlanner />);

    const printButton = screen.getByTestId('print-shopping-list');
    fireEvent.click(printButton);

    expect(mockPrintShoppingList).toHaveBeenCalled();
  });
});
