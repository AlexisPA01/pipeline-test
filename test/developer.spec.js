import request from 'supertest';
import app from '../app';

import { Developer } from "../src/models/Developer";

describe('postContAsyncDeveloper', () => {
    it('should create a new developer model in the database', async () => {
        const mockDeveloper = {
            Name: 'Developer Test ',
            FoundationYear: 1800,
            Country: "Country test",
        };

        const result = await request(app)
            .post(`/api/developer`)
            .send(mockDeveloper);

        expect(result.body.data).toBe("Record added.");
        expect(result.body.message).toBe("OK Result");
        expect(result.body.status).toBe(200);
    });

    it('returns a 400 error if there is missing fields', async () => {

        const mockDeveloper = {
            //Name: 'Developer Test fail',
            FoundationYear: 'FoundationYear developer test',
            Country: "Country test",
        };

        const response = await request(app)
            .post('/api/developer')
            .send(mockDeveloper);

        expect(response.status).toBe(400);

    });


    it('returns a 500 error if there is a error', async () => {
        const mockDeveloper = {
            Name: 'Hotel Test',
            FoundationYear: 1800,
            Country: "Country test",
        };

        const mock = jest.spyOn(Developer, 'create').mockImplementation(() => {
            throw new Error('Intentional error');
        });

        const response = await request(app)
            .post('/api/developer')
            .send(mockDeveloper);

        expect(response.status).toBe(500);

        mock.mockRestore();
    });
});
