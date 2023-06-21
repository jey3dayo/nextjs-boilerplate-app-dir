/* eslint-disable */
import { Logo } from './logo';

describe('<Logo />', () => {
  beforeEach(() => {
    cy.mount(<Logo />);
  });

  it('should render the logo image with correct alt text', () => {
    cy.get('img[alt="ロゴ"]').should('be.visible');
  });

  it('should have correct width and height', () => {
    cy.get('img[alt="ロゴ"]').should('have.attr', 'width', '100');
    cy.get('img[alt="ロゴ"]').should('have.attr', 'height', '80');
  });
});

export {};
