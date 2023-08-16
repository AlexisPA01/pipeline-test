import { Developer } from '../models/Developer';

const getAsyncDevelopers = async () => 
{
    return await Developer.findAll();
}

const postAsyncDeveloper = async (developer) => 
{
    return await Developer.create({
        Name:developer.Name,
        FoundationYear:developer.FoundationYear,
        Country:developer.Country,
    });
}

const updatetAsyncDeveloper = async (developer) => 
{
    const data = {}
    
    for (let i in developer){
        if(developer[i] !== ''){
            data[i] = developer[i];
        }
    }
    delete data.Id;

    return await Developer.update(
        data,
        {
            where:{ Id : developer.Id }
        }
    );
}

const deleteAsyncDeveloper = async (Id) => 
{
    return await Developer.destroy(
        {
            where:{ Id }
        }
    );
}

export const methods = 
{
    getAsyncDevelopers,
    postAsyncDeveloper,
    updatetAsyncDeveloper,
    deleteAsyncDeveloper
};