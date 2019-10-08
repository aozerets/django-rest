import React from 'react';
import { CourseCard } from '../components/CourseCard/CourseCard';
import { Profile } from '../components/Profile/';
import { SignCourseForm } from '../components/Forms/SignCourseForm/';
import DatePicker from "react-datepicker";
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it("adds correctly", () => {
  expect(1+1).toEqual(2);
});


describe('CourseCard rendering', () => {
  it('snapshot matching', () =>{
    const component = renderer.create(<CourseCard />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render elements with right count', () => {
    let wrapper = shallow(<CourseCard />);
    expect(wrapper.children('h2')).toHaveLength(1);
    expect(wrapper.children('h4')).toHaveLength(1);
    expect(wrapper.children('p')).toHaveLength(3);
  });
  it('should highlight', () => {
    let wrapper = shallow(<CourseCard />);
    const highlight = jest.fn(() => {console.log("Punished")});
    wrapper.instance().highlightOption = highlight;
    wrapper.instance().forceUpdate();
    wrapper.find('div').simulate('mouseEnter');
    expect(highlight).toHaveBeenCalled();
    wrapper.find('div').simulate('mouseLeave');
    expect(highlight).toHaveBeenCalled();
  });
  it('should be highlight class', () => {
    let wrapper = mount(<CourseCard />);
    wrapper.find('div').simulate('mouseEnter');
    expect(wrapper.getDOMNode().classList.contains("highlighted")).toBeTruthy();
    wrapper.find('div').simulate('mouseLeave');
    expect(wrapper.getDOMNode().classList.contains("highlighted")).toBeFalsy();
  });
  it('should render with props', () => {
    const name = 'NAME';
    const title = 'TITLE';
    const started = '12.12.2012';
    let wrapper = mount(<CourseCard name={name} title={title} started={started} more={'MORE MORE'} />);
    
    expect(wrapper.find('h2').text()).toEqual(title);
    expect(wrapper.find('h4').text()).toEqual(`Starting ${started}!!!!`);
    expect(wrapper.getDOMNode().classList.contains(`course-card__${name}`)).toBeTruthy();
  })
});


describe('Profile rendering', () => {
  it('snapshot matching', () => {
    const getProfile = jest.fn();
    const component = renderer.create(<Profile getProfile={getProfile}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render elements with right count', () => {
    const getProfile = jest.fn();
    let wrapper = shallow(<Profile getProfile={getProfile}/>);
    
    expect(wrapper.children('h1')).toHaveLength(1);
    expect(wrapper.children('h2')).toHaveLength(1);
    expect(wrapper.children('form')).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<DatePicker />)).toBeTruthy();
  });
  it('should render with props', () => {
    const name = 'NAME';
    const surname = 'SURNAME';
    const country = 'COUNTRY';
    const props = {
      "name": name,
      "surname": surname,
      "country": country
    };
    let wrapper = mount(<Profile getProfile={jest.fn()} />);
    wrapper.setState({...props});
    
    expect(wrapper.find('[name="name"]').props().value).toEqual(name);
    expect(wrapper.find('[name="surname"]').props().value).toEqual(surname);
    expect(wrapper.find('[name="country"]').props().value).toEqual(country);
  })
});


describe('SignCourseForm rendering', () => {
  it('snapshot matching', () => {
    const toggleSignCourse = jest.fn();
    const component = renderer.create(<SignCourseForm isSignCourseOpen={true} toggleSignCourse={toggleSignCourse}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render elements with right count', () => {
    let wrapper = shallow(<SignCourseForm />);

    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(1);
  });
  it('should render with props', () => {
    const h2Text = 'Signing on some course';
    const h3Text = 'Very good choice';
    let wrapper = mount(<SignCourseForm isSignCourseOpen={true}/>);
    
    expect(wrapper.find('h2').text()).toEqual(h2Text);
    expect(wrapper.find('h3').text()).toEqual(h3Text);
  });
  it('should call handleSignCourse on close', () => {
    let wrapper = shallow(<SignCourseForm isSignCourseOpen={true}/>);
    const handleSignCourse = jest.fn();
    wrapper.instance().handleSignCourse = handleSignCourse;
    wrapper.instance().forceUpdate();
    wrapper.find('span').simulate('click');
    expect(handleSignCourse).toHaveBeenCalled();
  });
  it('should call toggleSignCourse on close', () => {
    const toggleSignCourse = jest.fn(() => {console.log("Punished")});
    let wrapper = shallow(<SignCourseForm isSignCourseOpen={true} toggleSignCourse={toggleSignCourse}/>);
    wrapper.find('span').simulate('click');
    expect(toggleSignCourse).toHaveBeenCalled();
  });
});