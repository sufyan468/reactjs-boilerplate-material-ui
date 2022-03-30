import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('on initial render, Enter Email & password here', () => {
    render(<LoginPage />);
    screen.debug();
});
