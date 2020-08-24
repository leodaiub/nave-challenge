import React from 'react';
import { render } from '@testing-library/react';

import { Modal } from '..';

describe('<Modal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Modal />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
