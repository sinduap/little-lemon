import { render, screen } from '@testing-library/rea';
import BookForm from './BookingForm.component';

test('Renders the BookingForm heading', () => {
  render(<BookForm />);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});
