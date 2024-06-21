This README outlines a project designed to teach unit testing in NodeJS using various tools and techniques. The main learning objectives include using Mocha for test suites, different assertion libraries like Node and Chai, handling long test suites, employing spies and stubs, using hooks, testing asynchronous functions, and writing integration tests with a Node server.

### Key Tasks:

1. **Basic Test with Mocha and Node Assertion Library**:
   - Set up Mocha using npm and create a function `calculateNumber` that rounds and sums two numbers.
   - Write test cases in `0-calcul.test.js`.

2. **Combining Descriptions**:
   - Extend `calculateNumber` to support `SUM`, `SUBTRACT`, and `DIVIDE` operations.
   - Write organized test cases using `describe` in `1-calcul.test.js`.

3. **Basic Test Using Chai Assertion Library**:
   - Copy and modify the previous function and tests to use Chai's `expect` for assertions.

4. **Spies**:
   - Use Sinon to create a spy for testing a function `sendPaymentRequestToApi` that calls `Utils.calculateNumber`.

5. **Stubs**:
   - Use Sinon to create a stub for `Utils.calculateNumber` to control its return value and verify its usage in tests.

6. **Hooks**:
   - Utilize `beforeEach` and `afterEach` hooks to manage test setup and teardown in tests for `sendPaymentRequestToApi`.

7. **Async Tests with Done**:
   - Write tests for an async function `getPaymentTokenFromAPI` using the `done` callback.

8. **Skip**:
   - Use Mocha's `skip` feature to bypass failing tests without removing them.

9. **Basic Integration Testing**:
   - Set up an Express server and write integration tests for an endpoint returning a welcome message.

10. **Regex Integration Testing**:
    - Add and test a route with a dynamic parameter validated by regex.

11. **Deep Equality & Post Integration Testing**:
    - Add endpoints for returning payment methods and handling login, and write corresponding tests using deep equality for object comparison.

Each task involves creating specific files, writing functions, and developing test cases to ensure understanding and application of unit testing concepts in NodeJS.
