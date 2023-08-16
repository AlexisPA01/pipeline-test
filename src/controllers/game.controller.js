import { methods as gameService } from '../services/game.service';
import response from '../shared/response';

const getContAsyncGames = async (req,res) => 
{
    try{
        const Games = await gameService.getAsyncGames();
        res.json(new response("OK Result",200,Games));
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}


const postContAsyncGame = async (req,res) => 
{
    try{
        const {
            Name,
            Gender,
            Platform,
            Price,
            IdDeveloper
        } = req.body
        console.table(req.body)
        if( Name === undefined || Gender === undefined || Platform === undefined || Price === undefined || IdDeveloper === undefined )
        {
            res.status(400).json(new response("Bad request. Please fill all fields.",400,null));
        }else
        {
           await gameService.postAsyncGame(
            {
                Name,
                Gender,
                Platform,
                Price,
                IdDeveloper
            });
        
            res.json(new response("OK Result", 200, "Record added."));
        }
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}

const updateContAsyncGame = async (req,res) => 
{
    try{
        const { Id }= req.params;

        const {
            Name,
            Gender,
            Platform,
            Price,
            IdDeveloper
        } = req.body

        if( Id === undefined )
        {
            res.status(400).json(new response("Bad request. Please fill all fields.",400,null));
        }else
        {
           await gameService.updatetAsyncGame(
            {
                Id,
                Name,
                Gender,
                Platform,
                Price,
                IdDeveloper
            });
            
            res.json(new response("OK Result",200,"Record added."));
        }
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}

const deleteContAsyncGame = async (req,res) => 
{
    try{
        const { Id }= req.params;

        const result = await gameService.deleteAsyncGame(Id);;
        res.json(new response("OK Result",200,result));
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}

export const methods = 
{
    getContAsyncGames,
    postContAsyncGame,
    updateContAsyncGame,
    deleteContAsyncGame
}