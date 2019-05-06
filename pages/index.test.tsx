import { shallow, mount } from 'enzyme';
import Index from './index';

describe('Index Page', () => {
  test('rendered element is not empty', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.exists()).toBe(true);
  });

  test('rendered element has a header', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find('.header').exists()).toBe(true);
  });

  test('rendered element has a footer', () => {
    const wrapper = mount(<Index />);
    expect(wrapper.find('.footer').exists()).toBe(true);
  });
});
