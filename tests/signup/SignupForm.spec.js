import React from 'react';
import SignupForm from '../../src/components/signup/SignupForm';
import renderer from 'react-test-renderer';

describe('SignupForm Component', () => {
  it('it matches the snapshot', () => {
    const tree = renderer.create(<SignupForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
