test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log("responseBody", responseBody);

  let parsedDate = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parsedDate);

  expect(responseBody.dependencies.database.version).toEqual("16.0");

  expect(
    responseBody.dependencies.database.max_connections,
  ).toBeGreaterThanOrEqual(1);

  expect(responseBody.dependencies.database.active_connections).toEqual(1);
});
