//Consultas



db.concesionario.find({$and:
     [{Precio: {$gt: 60000}},
     {Marca: {$nin: ["Lexus", "Tesla", "Maserati" ] }},
     {"Realizada":true }]}).pretty()



db.concesionario.find( { $and: 
    [{Cliente: { $eq:"Autoescuela" } },
    {Automatico: false }, 
    {FechaCompra:{$lte: new Date(1999,02,02)}}  ] } ).pretty()

db.concesionario.find( { $nor:
    [{Cliente: { $eq:"Persona" } },
    { Automatico: false }  ] } ).pretty()


    

db.concesionario.find( { $and:
    [{FechaCompra: { $lt:new Date(2015,1,1) } },
    {Marca: { $eq:"Volkswagen" } }] } ).pretty()

db.concesionario.find( { $and: 
    [{FechaCompra: { $lt:new Date(2015,1,1) } },
    {Marca: { $eq:"Volkswagen" } }, 
    {Motor: {$ne: "Gasolina"}} ] } ).pretty()

db.concesionario.find( { $and:
    [{FechaCompra: { $gt:new Date(2015,1,1) } },
    {Marca: { $eq:"Volkswagen" } },
    {Motor: {$ne: "Gasolina"}} ] } ).pretty()



db.concesionario.find({ $and:
    [{Cliente: { $eq:"Autoescuela" } }, 
    {TipoVehiculo:{$eq:"Motocicleta"}}]}).pretty()

db.concesionario.find({ $and:
    [{Cliente: { $eq:"Autoescuela" } }, 
    {IdCompra: {$regex: /M$/i}}]}).pretty()



db.concesionario.find({$and:
    [{"Dimensiones.Altura": {$gte:"2.00m" },
    "Dimensiones.Longitud": {$gt:"2.70m"}}]}).pretty()

db.concesionario.find({$and:
    [{"Dimensiones.Altura": {$gte:"2.00m" },
    "Dimensiones.Longitud": {$gt:"2.70m"}},
    {TipoVehiculo:{$not:{$eq:"Coche"}}}]}).pretty()


db.concesionario.find({
    $and: [
        { $or: [ { EquipoExtra: { $in: [/^Ret/]} }, { "Modelo":"Astra" } ] },
        { $or: [ { EquipoExtra: { $all: [ "RuedaExtra" , "ChalecoReflectante" ] } } ] }
    ]
})










