import { methods as developerService } from '../services/developer.service';
import response from '../shared/response';

const getContAsyncDevelopers = async (req,res) => 
{
    try{
        const Developer = await developerService.getAsyncDevelopers();
        res.json(new response("OK Result",200,Developer));
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}

const postContAsyncDeveloper = async (req,res) => 
{
    try{
        const {
            Name,
            FoundationYear,
            Country
        } = req.body

        if( Name === undefined || FoundationYear === undefined || Country === undefined )
        {
            res.status(400).json(new response("Bad request. Please fill all fields.",400,null));
        }else
        {
           await developerService.postAsyncDeveloper(
            {
                Name,
                FoundationYear,
                Country
            });
        
            res.json(new response("OK Result",200,"Record added."));
        }
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}

const updateContAsyncDeveloper = async (req,res) => 
{
    try{
        const { Id }= req.params;

        const {
            Name,
            FoundationYear,
            Country
        } = req.body

        if( Id === undefined )
        {
            res.status(400).json(new response("Bad request. Please fill all fields.",400,null));
        }else
        {
           await developerService.updatetAsyncDeveloper(
            {
                Id,
                Name,
                FoundationYear,
                Country
            });
            
            res.json(new response("OK Result",200,"Record added."));
        }
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}

const deleteContAsyncDeveloper = async (req,res) => 
{
    try{
        const { Id }= req.params;

        const result = await developerService.deleteAsyncDeveloper(Id);;
        res.json(new response("OK Result",200,result));
    }
    catch(error)
    {
        res.status(500).json(new response(error.message,500, null));
    }
}


export const methods = 
{
    getContAsyncDevelopers,
    postContAsyncDeveloper,
    updateContAsyncDeveloper,
    deleteContAsyncDeveloper
}