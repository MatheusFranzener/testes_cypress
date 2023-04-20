describe("teste get alunos", () => {
    it("verifica se retorna uma lista de alunos", () => {
        cy.request("GET", "http://localhost:8081/aluno").as("AlunoRequest");
        cy.get("@AlunoRequest").then(response => {
            expect(response.body).to.be.an("array"); // Verifica se o retorno é uma lista
            expect(response.body.length).to.be.greaterThan(0); // Verifica se a lista está vazia
        })
    })
})