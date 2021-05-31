import React from 'react'; // needed
import ReactDOM from 'react-dom'; //needed
import { render, cleanup, fireEvent } from '@testing-library/react'; // from react testing lib 
import renderer from 'react-test-renderer'; // npm i react-test-renderer

import About from "./About";

afterEach(cleanup); // we can cleanup the tests using after each


// group of related test spec
describe('About component', () => {


  // test spec
  it('renders the about comp properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About/>, div);
  });

   // test spec
   it('should display the prop correctly', () => {
    // take the element to put under test
    const { getByTestId } = render( <About companyName='Amazon'></About>);
    // fetching the element by companyEl; // refer About.js 
    // checking if props are received correctly
    expect(getByTestId('companyEl')).toHaveTextContent('Amazon');// companyEl is the test id of the element
  });

  it('should have the right placeholder in input', () => {
    const { queryByPlaceholderText } = render(<About />);
  
    //if the placeholder is not matching, it will fail
    expect(queryByPlaceholderText('company')).toBeTruthy();
  });
 
  //checking whether the comp has right text
  it('should have official webpage text', () => {
    const { getByText } = render(<About />);
    const titleElement = getByText('Welcome to My Company\'s Official Webpage!');
    expect(titleElement).toBeInTheDocument();
  });

  //now let's check if the input element works well with onChange event
  it('should update onChange event in Fav company input', () => {
    // taking the comp to put under test
    const { queryByPlaceholderText} = render(<About />);
    // finding the element with a placeholder
    const favCompanyInput = queryByPlaceholderText('Fav Company');
    // now checking if onchange is working right or not
    //mock firing change event with the value 
    fireEvent.change(favCompanyInput, {target: {value: 'test'}});
    // finally checking if the input element is showing the right update
    expect(favCompanyInput.value).toBe('test');
  });

   //finally let's focus on snapshot testing
   it('should have right about comp snapshot', () => {
    const tree = renderer.create(<About companyName='Facebook'></About>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });


});


