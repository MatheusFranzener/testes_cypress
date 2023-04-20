describe("teste get turma", () => {
    it("verifica se retorna uma lista de turmas", () => {
        cy.request("GET", "http://localhost:8081/turma").as("TurmaRequest");
        cy.get("@TurmaRequest").then(response => {
            expect(response.body).to.be.an("array"); // Verifica se o retorno é uma lista
            expect(response.body.length).to.be.greaterThan(0); // Verifica se a lista está vazia
        })
    })
})