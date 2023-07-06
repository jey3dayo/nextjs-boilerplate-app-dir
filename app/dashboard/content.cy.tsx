/* eslint-disable */

import Content from './content';

describe('<Content />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Content />);

    cy.get(':nth-child(1) > .mb-4 > .block').contains('Text');
    cy.get(':nth-child(3) > .space-y-4').contains('vol: 50');
  });
});

export {};
