import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { debug } from 'jest-preview';




const setup = () => {
  const utils = render(<App/>)
  const input = screen.getByLabelText('display')
  return {
    input,
    ...utils,
  }
}

  
it('It should test the input', () => {
  const {input} = setup()
  fireEvent.input(input, {target: {value: '0'}})
  expect(input.value).toBe('0');
  debug();
});

test('clicking the number button', () => {
  render(<App/>);
  const button = screen.getByLabelText('numButton1');
  fireEvent.click(button);
  expect(screen.getByText('2')).toBeInTheDocument()

});
