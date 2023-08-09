import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { debug } from 'jest-preview';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import Button from './buttons/button';


configure({ adapter: new Adapter() });

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

test(' the number button', () => {
  render(<App/>);
  const button = screen.getByLabelText('numButton1');
  fireEvent.click(button);
  screen.debug(button);
  expect(screen.getByText('2')).toBeInTheDocument()

});

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button  onClick={mockCallBack}></Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
