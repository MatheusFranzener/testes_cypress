describe("teste get endereco", () => {
    it("verifica se retorna uma lista de enderecos", () => {
        cy.request("GET", "http://localhost:8081/endereco").as("EnderecoRequest");
        cy.get("@EnderecoRequest").then(response => {
            expect(response.body).to.be.an("array"); // Verifica se o retorno é uma lista
            expect(response.body.length).to.be.greaterThan(0); // Verifica se a lista está vazia
        })
    })
})