var name="window";

var object=function(){
    name='this is object',
    findname=function (){
        name='this is findname';
        return function(){
            return this.name;
        }
    }
    
    return findname;
}

var object1=function(){
    this.name='this is object'
};


var findname2=function(){
    return this.name;
}

var obj=new object1();

console.log(object()().call(obj));
console.log(obj.name);
console.log(findname2.call(obj));