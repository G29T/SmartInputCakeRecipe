import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CakeHistory from './CakeHistory'; 
import { useCakeContext } from '../../context/CakeProvider';

jest.mock('../../context/CakeProvider', () => ({
  useCakeContext: jest.fn(),
}));

describe('CakeHistory', () => {

  const mockCakes = {
    cake_1: { name: 'Red Velvet Cake' },
    cake_2: { name: 'Brownie' },
  };
  const mockDeleteCake = jest.fn();
  const mockEditCakeName = jest.fn();

  beforeEach(() => {
    useCakeContext.mockReturnValue({
      cakes: mockCakes,
      deleteCake: mockDeleteCake,
      editCakeName: mockEditCakeName,
    });
});

  it('renders the cake list correctly', () => {
    render(<CakeHistory />);

    expect(screen.getByText('Cake History')).toBeInTheDocument();
    expect(screen.getByText('Red Velvet Cake')).toBeInTheDocument();
    expect(screen.getByText('Brownie')).toBeInTheDocument();
  });

  it('calls editCakeName when edit button is clicked', () => {
    render(<CakeHistory />);

    const editButton = screen.getByTestId('edit-cake-name-cake_1');
    fireEvent.click(editButton);

    expect(mockEditCakeName).toHaveBeenCalledWith('cake_1');
  });

  it('calls deleteCake when delete button is clicked', () => {
    render(<CakeHistory />);

    const deleteButton = screen.getByTestId('delete-cake-cake_1');
    fireEvent.click(deleteButton);

    expect(mockDeleteCake).toHaveBeenCalledWith('cake_1');
  });
});
