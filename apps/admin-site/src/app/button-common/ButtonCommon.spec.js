import { render } from '@testing-library/react';
import ButtonCommon from './ButtonCommon';
describe('ButtonCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonCommon />);
    expect(baseElement).toBeTruthy();
  });
});
