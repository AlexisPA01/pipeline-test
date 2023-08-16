import { Game } from '../models/Game';
import { Developer } from '../models/Developer';

const getAsyncGames = async () => 
{
    return await Game.findAll({
        include:{
            model:Developer
        }
    });
}

const postAsyncGame = async (game) => 
{
    return await Game.create({
        Name:game.Name,
        Gender:game.Gender,
        Platform:game.Platform,
        Price: game.Price,
        IdDeveloper: game.IdDeveloper
    });
}

const updatetAsyncGame = async (game) => 
{
    const data = {}
    
    for (let i in game){
        if(game[i] !== ''){
            data[i] = game[i];
        }
    }
    delete data.Id;

    return await Game.update(
        data,
        {
            where:{ Id : game.Id }
        }
    );
}

const deleteAsyncGame = async (Id) => 
{
    return await Game.destroy(
        {
            where:{ Id }
        }
    );
}


export const methods = 
{
    getAsyncGames,
    postAsyncGame,
    updatetAsyncGame,
    deleteAsyncGame
};