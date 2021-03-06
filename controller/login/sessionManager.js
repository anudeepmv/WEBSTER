///For securely transforming the data
///For verifying and adding the data into the database
const jwt = require("jsonwebtoken")

const sessions={}

const get=(id)=>{
    return sessions[id];
}

const set=(id,session)=>{
    sessions[id]=session;
}

const parseSession= (token)=> {
    let decoded = jwt.verify(token, 'activity');
    return decoded;
};

module.exports={get, set, parseSession}