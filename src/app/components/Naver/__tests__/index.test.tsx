import React from 'react';
import { render } from '@testing-library/react';

import { Naver } from '..';

describe('<Naver  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Naver />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
