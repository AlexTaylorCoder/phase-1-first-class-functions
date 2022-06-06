function receivesAFunction(cb){
    return cb()
}
function returnsANamedFunction(){
    return function Ran(){
        return 2+2
    }
}
function returnsAnAnonymousFunction(){
    return (num)=> num+2
}