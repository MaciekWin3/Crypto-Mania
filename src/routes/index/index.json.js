import { data } from './_data'

export async function get(req, res, next){	
    try{
        await res.end(JSON.stringify(data));
        console.log(data);
    }
    catch(e){
        res.end(JSON.stringify(e))
        console.log(data);
    }
    
}

