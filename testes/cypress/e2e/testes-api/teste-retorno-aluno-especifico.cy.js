describe("get by id aluno", () => {
    it("verifica se retorna um aluno com id = 1", () => {
        cy.request("GET", "http://localhost:8081/aluno/1").as("AlunoRequest");
        cy.get("@AlunoRequest").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("id", 1);
        })
    })
})