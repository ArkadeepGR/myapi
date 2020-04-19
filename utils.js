data=[
    {
        name:"Arkadeep",
        age:22,
        county:"India",
        email:"arkadeepghoshroy@gmail.com",
        edu:["DPS Siliguri","VIT Vellore"]
    },
    {
        name:"Raya",
        age:21,
        county:"Vitenam",
        email:"rayaroy@gmail.com",
        edu:["NCS Siliguri","Loretto Kolkata"]
    },
    {
        name:"Anisha",
        age:23,
        county:"Japan",
        email:"anisha@yahoo.co.in",
        edu:["DPS Siliguri","PES Bangalore"]
    }
]

const getData=function(nm,callback){
    items=data.filter(function(n){
       return n.name===nm
    })
    if(items.length==0)
        callback({Error:"Item not found"},undefined)
    else
        callback(undefined,items)
}

module.exports={
    getData:getData
}