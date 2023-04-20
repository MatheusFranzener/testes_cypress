describe("update endereco", () => {
    it("verifica se ocorreu a edição de um endereco com id = 1", () => {
        cy.request("PUT", "http://localhost:8081/endereco/1", {rua: "oi", numero: 201, cidade: "Jaragua", estado: "SC", bairro: "Jaragua esquerdo", cep: 11111111}).as("EnderecoRequest");
        cy.get("@EnderecoRequest").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("rua", "oi");
        })
    })
})