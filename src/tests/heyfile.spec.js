import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Hello } from '../js/heyfile';

describe('HelloComponent', () => {
  it('should output Hello World! to the screen', () => {
    const expected = 'Hello World!';
    const renderer = TestUtils.createRenderer();
    renderer.render(<Hello />);
    const actual = renderer.getRenderOutput().props.children;
    expect(actual).toEqual(expected);
  });
});
