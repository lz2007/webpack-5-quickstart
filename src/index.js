let [a, b, c] = [1, 2, 3];

const test = async() => {
    return a
}

const testA= async ()=>{
    const val = await test();
    console.log(val)
}

testA()
