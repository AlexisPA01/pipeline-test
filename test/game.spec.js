import request from 'supertest';
import app from '../app';

import { Game } from "../src/models/Game";

describe('postContAsyncGame', () => {
    it('should create a new Game model in the database', async () => {
        const mockGame = {
            Name: 'Gane Test',
            Gender: 'Gender developer test',
            Platform: "Platform test",
            Price: 60,
            IdDeveloper: 1
        };

        const result = await request(app)
            .post(`/api/game`)
            .send(mockGame);

        //expect(result.body.data).toBe("Record added.");
        expect(result.body.message).toBe("OK Result");
        expect(result.body.status).toBe(200);
    });

    it('returns a 400 error if there is missing fields', async () => {

        const mockGame = {
            Name: 'Gane Test fail',
            Gender: 'Gender developer test',
            Platform: "Platform test",
            Price: 60,
            IdDeveloper: 1
        };

        const response = await request(app)
            .post('/api/game')
            .send(mockGame);

        expect(response.status).toBe(400);

    });


    it('returns a 500 error if there is a error', async () => {
        const mockGame = {
            Name: 'Gane Test',
            Gender: 'Gender developer test',
            Platform: "Platform test",
            Price: 60,
            IdDeveloper: 1
        };

        const mock = jest.spyOn(Game, 'create').mockImplementation(() => {
            throw new Error('Intentional error');
        });

        const response = await request(app)
            .post('/api/game')
            .send(mockGame);

        expect(response.status).toBe(500);

        mock.mockRestore();
    });
});
