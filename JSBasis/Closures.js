function outer(){
    const name = 'Outer';
    function inner(){
        console.log('Outer name:',name);
    }
    inner();
}
outer();