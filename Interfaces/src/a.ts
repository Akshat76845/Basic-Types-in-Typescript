function isLegal(user: {
    firstName:string;
    lastName:string;
    age:number
}){
    if(user.age > 18){
                return true;
            }
            else{
                return false
            }}
    isLegal({
        firstName:"harkirat",
        lastName:"singh",
        age:20
    })
