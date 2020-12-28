let data = [];


export function get(req, res, next) {


  
  res.end(JSON.stringify(data));

}

export function post(req, res, next) {
    const { MinerData, ApiData, wallet } = req.body;

    if (data && data.length) {    
      data.pop();
      data.push({ MinerData , ApiData, wallet});
    } 
    else { 
      data.push({ MinerData , ApiData, wallet});
    }
    console.log(data)
    console.log("POST");
    res.end(JSON.stringify([MinerData , ApiData, wallet]));
    
}