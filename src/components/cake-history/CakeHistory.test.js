import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CakeHistory from './CakeHistory'; 
import { useCakeContext } from '../../context/CakeProvider';

jest.mock('../../context/CakeProvider', () => ({
  useCakeContext: jest.fn(),
}));

describe('CakeHistory', () => {
  it('it renders the cake list correctly', () => {
    const mockCakes = {
      cake1: { name: 'Red Velvet Cake' },
      cake2: { name: 'Brownie' },
    };
    const mockDeleteCake = jest.fn();
    const mockEditCakeName = jest.fn();

    useCakeContext.mockReturnValue({
      cakes: mockCakes,
      deleteCake: mockDeleteCake,
      editCakeName: mockEditCakeName,
    });

    render(<CakeHistory />);

    expect(screen.getByText('Cake History')).toBeInTheDocument();
    expect(screen.getByText('Red Velvet Cake')).toBeInTheDocument();
    expect(screen.getByText('Brownie')).toBeInTheDocument();
  });

  it('it calls editCakeName when edit button is clicked', () => {
    const mockCakes = {
      cake1: { name: 'Red Velvet Cake' },
    };
    const mockEditCakeName = jest.fn();
    const mockDeleteCake = jest.fn();

    useCakeContext.mockReturnValue({
      cakes: mockCakes,
      deleteCake: mockDeleteCake,
      editCakeName: mockEditCakeName,
    });

    render(<CakeHistory />);

    const editButton = screen.getByTestId('edit-cake-name');
    fireEvent.click(editButton);

    expect(mockEditCakeName).toHaveBeenCalledWith('cake1');
  });

  it('it calls deleteCake when delete button is clicked', () => {
    const mockCakes = {
      cake1: { name: 'Brownie' },
    };
    const mockDeleteCake = jest.fn();
    const mockEditCakeName = jest.fn();

    useCakeContext.mockReturnValue({
      cakes: mockCakes,
      deleteCake: mockDeleteCake,
      editCakeName: mockEditCakeName,
    });

    render(<CakeHistory />);

    const deleteButton = screen.getByTestId('delete-cake');
    fireEvent.click(deleteButton);

    expect(mockDeleteCake).toHaveBeenCalledWith('cake1');
  });
});
