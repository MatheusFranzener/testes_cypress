describe("teste delete professor", () => {
    it("verifica se o professor com id = 1 foi deletado", () => {
        cy.request("DELETE", "http://localhost:8081/professor/4").as("ProfessorRequest");
        cy.get("@ProfessorRequest").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.equal("Professor deletado com sucesso!");
        })
    })
})