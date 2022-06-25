

async function gitUser(user){
    try{
    let res = await fetch(`https://api.github.com/users/${user}`);

    let data = await res.json();
    console.log(data)
    return data;
}
catch(err){
    console.log(err);
}

}
export default gitUser