import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("Rohan");
    });
    
    // Largest number queries
    test('should return largest (74, 43, 56)', () => {
        const query = "Which of the following numbers is the largest: 74, 43, 56?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("74");
    });

    test('should return largest (54, 79, 87)', () => {
        const query = "Which of the following numbers is the largest: 54, 79, 87?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("87");
    });

    test('should return largest (26, 12, 79)', () => {
        const query = "Which of the following numbers is the largest: 26, 12, 79?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("79");
    });

    test('should return largest (72, 93, 57)', () => {
        const query = "Which of the following numbers is the largest: 72, 93, 57?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("93");
    });

    test('should return largest (64, 3, 6)', () => {
        const query = "Which of the following numbers is the largest: 64, 3, 6?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    test('should return largest (86, 72, 55)', () => {
        const query = "Which of the following numbers is the largest: 86, 72, 55?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("86");
    });

    test('should return largest (58, 39, 66)', () => {
        const query = "Which of the following numbers is the largest: 58, 39, 66?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("66");
    });

    test('should return largest (5, 3, 24)', () => {
        const query = "Which of the following numbers is the largest: 5, 3, 24?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("24");
    });

    test('should return largest (72, 37, 51)', () => {
        const query = "Which of the following numbers is the largest: 72, 37, 51?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("72");
    });

    // Addition queries
    test('should return sum (92 + 31)', () => {
        const query = "What is 92 plus 31?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("123");
    });

    test('should return sum (49 + 29)', () => {
        const query = "What is 49 plus 29?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("78");
    });

    test('should return sum (21 + 66)', () => {
        const query = "What is 21 plus 66?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("87");
    });

    test('should return sum (45 + 38)', () => {
        const query = "What is 45 plus 38?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("83");
    });

    test('should return sum (43 + 16)', () => {
        const query = "What is 43 plus 16?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("59");
    });

    test('should return sum (88 + 45)', () => {
        const query = "What is 88 plus 45?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("133");
    });

    test('should return sum (54 + 44)', () => {
        const query = "What is 54 plus 44?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("98");
    });
});
