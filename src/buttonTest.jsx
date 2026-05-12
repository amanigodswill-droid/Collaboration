import Test from "./Test";
import { render, screen, fireEvent } from '@testing-library/react';

render (<Test />)
screen.getByText('Student Registration Form')
screen.getByLabelText('Name:')
screen.getByPlaceholderText('Enter your name')  
screen.getByLabelText('Email:')
screen.getByPlaceholderText('Enter your email')
screen.getByLabelText('Phone:')
screen.getByPlaceholderText('Enter your phone number')
screen.getByLabelText('Password:')
screen.getByPlaceholderText('Enter your password')
screen.getByRole('button', { name: 'Register' })

fireEvent. click(screen.getByRole('button', { name: 'Register' }))
expect(screen.getByText('Student Registration Form')).toBeInTheDocument()

expect(screen.getByLabelText('Name:')).toBeInTheDocument()
expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
expect(screen.getByLabelText('Email:')).toBeInTheDocument()
expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
expect(screen.getByLabelText('Phone:')).toBeInTheDocument()
expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument()
expect(screen.getByLabelText('Password:')).toBeInTheDocument()
expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument()
expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
