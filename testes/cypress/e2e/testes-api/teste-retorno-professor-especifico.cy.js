describe("get by id professor", () => {
    it("verifica se retorna um professor com id = 1", () => {
        cy.request("GET", "http://localhost:8081/professor/1").as("ProfessorRequest");
        cy.get("@ProfessorRequest").then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an("object");
            expect(response.body).to.have.property("id", 1);
        })
    })
})