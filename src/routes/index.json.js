import { data } from './_data';


export function get(req, res, next) {
  
  res.end(JSON.stringify(data));

}

export function post(req, res, next) {
    const { MinerData, ApiData, wallet } = req.body;

    data.push({ MinerData , ApiData, wallet});
    
    console.log("POST");
    //console.log(JSON.stringify([MinerData , ApiData, wallet]));
    res.end(JSON.stringify([MinerData , ApiData, wallet]));
}