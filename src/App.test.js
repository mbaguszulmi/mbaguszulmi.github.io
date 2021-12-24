import { render, screen } from '@testing-library/react';
import { appRenderer } from './appRenderer';

test('Test Landing Page', () => {
  render(appRenderer());

  const myName = screen.getAllByText('Muhammad Bagus Zulmi');
  myName.forEach(name => {
    expect(name).toBeInTheDocument();
  })
})
