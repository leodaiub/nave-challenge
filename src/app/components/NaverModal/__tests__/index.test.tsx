import React from 'react';
import { render } from '@testing-library/react';

import { NaverModal } from '..';

describe('<NaverModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NaverModal />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
