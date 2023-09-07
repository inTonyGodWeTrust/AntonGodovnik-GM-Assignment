import { test, expect } from '@playwright/test';

test.describe("Assignment for Automating API", () => {

    test("Create User", async ({request}) => {
        const correctUserCreationResponse = await request.post(`/Account/v1/User`, {
            data: { userName: 'test@test.com', password: 'new122!QWE'}});
        expect(correctUserCreationResponse.ok()).toBeTruthy();
    })
    test("Generate Token", async ({request}) => {
            const tokenResponse = await request.post("/Account/v1/GenerateToken", {
                data: { userName: 'test@test.com', password: 'new122!QWE'}});
            expect(tokenResponse.ok()).toBeTruthy()
        });
    test("Authorization of user", async ({request}) => {
            const authorizationResponse = await request.post("/Account/v1/Authorized", {
                data: { userName: 'test@test.com', password: 'new122!QWE'}});
            expect(authorizationResponse.ok()).toBeTruthy()
        });

    // I can't request books because when making a request the UserId is not authorized
    // And of course there could be some random generator for constant with unique credentials
    })