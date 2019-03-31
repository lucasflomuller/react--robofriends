import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props()).toHaveProperty('color', 'red');
  expect(wrapper.props()).toHaveProperty('onClick');

});

it('should correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 1});
})