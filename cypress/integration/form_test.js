// write tests here
describe("Pizza form app", () => {
    // here go our tests
    beforeEach(() => {
      // arbitrary code you want running before tests start
      cy.visit("http://localhost:3001/");
    });
    // here go our tests
    it("sanity test to make sure tests work", () => {
      // false positive
      // 'expect' is an assertion
      // there can be many assertions per test
      // inside the 'it' statement (test) many assertions may be
      // logically grouped together
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
    });
    it("Input test", () => {
        cy.get('[href="/pizza"]').click()  
      cy.get('input[name="customerName"]').type("Mike").should("have.value", "Mike");
    });

    it("Multiple toppings", () => {
        cy.get('[href="/pizza"]').click()
        cy.get('input[name="pepperoni"]').click().should("have.checked", "true");
        cy.get('input[name="sausage"]').click().should("have.checked", "true");
      });

      it("submit", () => {
        cy.get('[href="/pizza"]').click()
        cy.get('input[name="customerName"]').type("Erin")
        cy.get('select').select('L')
        cy.get('button').click()
      });

    })