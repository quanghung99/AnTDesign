import { render } from '@testing-library/react';
import UiComponens from './ui-componens';
describe('UiComponens', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponens />);
    expect(baseElement).toBeTruthy();
  });
});
