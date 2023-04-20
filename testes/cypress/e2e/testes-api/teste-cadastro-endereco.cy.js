describe("teste cadastro endereco", () => {
    it("verifica se o cadastro foi efetuado", () => {
        cy.request("POST", "http://localhost:8081/endereco", {rua: "oi", numero: 201, cidade: "Jaragua", estado: "SC", bairro: "Jaragua esquerdo", cep: 11111111}).as("EnderecoRequest");
        cy.get("@EnderecoRequest").then(response => {
            expect(response.body).to.be.an("object");
            expect(response.status).to.equal(200)
        })
    })
})