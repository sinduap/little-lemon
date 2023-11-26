import { render, screen } from '@testing-library/react';
import Booking from './';
import Test from '../../util/Test';

describe('Booking Component', () => {
  test('Should render Booking Title correctly', () => {
    render(
      <Test>
        <Booking />
      </Test>
    );
    const title = screen.getByText('Reserve a Table');
    expect(title).toBeInTheDocument();
  });
});
