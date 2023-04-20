describe("update disciplina", () => {
    it("verifica se ocorreu a edição de uma disciplina com id = 1", () => {
        cy.request("PUT", "http://localhost:8081/disciplina/1", {nome: "Matematica", listaDeProfessores: [{id: 3}]}).as("DisciplinaRequest");
        cy.get("@DisciplinaRequest").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("nome", "Matematica");
        })
    })
})