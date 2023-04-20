describe("update curso", () => {
    it("verifica se ocorreu a edição de um curso com id = 1", () => {
        cy.request("PUT", "http://localhost:8081/curso/1", {nome: "AI-PSIN", listaDeDisciplinas: [{id: 3}]}).as("CursoRequest");
        cy.get("@CursoRequest").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("nome", "AI-PSIN");
        })
    })
})