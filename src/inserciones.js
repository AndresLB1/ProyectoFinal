//ComprasConcesionario

db.concesionario.insertMany([
{
     "IdCompra": "SJ234JS878C", "FechaCompra": new Date(2012,3,2),"Cliente":"Persona", "NombreCliente":"Gonzalo", 
     "DNICliente":"38760987L", "EdadCliente":25, "TipoVehiculo":"Coche", "Marca":"BMW", 
     "Modelo":"Q7", "EquipoExtra":["ChalecoReflectante" ], "Automatico":true,
     "Precio":65000, "Dimensiones":{Altura:"2.1m", Longitud:"3m", Anchura:"1.5m"},
     "Motor":"Diesel",  "Realizada":true

}

,

{
     "IdCompra": "SJ2307S878C", "FechaCompra": new Date(2019,5,2),"Cliente":"Persona", "NombreCliente":"Jesus", 
     "DNICliente":"38734587D", "EdadCliente":67, "TipoVehiculo":"Coche", "Marca":"Tesla", 
     "Modelo":"Ignis", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":75000, "Dimensiones":{Altura:"2.09m", Longitud:"2.71m", Anchura:"1.3m"},
     "Motor":"Gasolina",  "Realizada":true

}

,

{
     "IdCompra": "SJ234JS878C", "FechaCompra": new Date(2012,3,2),"Cliente":"Persona", "NombreCliente":"Alberto", 
     "DNICliente":"38760987L", "EdadCliente":18, "TipoVehiculo":"Coche", "Marca":"Lexus", 
     "Modelo":"X", "EquipoExtra":["RuedaExtra","ChalecoReflectante" ], "Automatico":true,
     "Precio":80000, "Dimensiones":{Altura:"2.1m", Longitud:"3m", Anchura:"1.5m"},
     "Motor":"Diesel",  "Realizada":true

}

,

{
     "IdCompra": "PJ630G4JS878M", "FechaCompra": new Date(2008,2,6),"Cliente":"Persona", "NombreCliente":"Eloy", 
     "DNICliente":"38734787L", "EdadCliente":40, "TipoVehiculo":"Motocicleta", "Marca":"Volkswagen", 
     "Modelo":"203", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":10000, "Dimensiones":{Altura:"1.8m", Longitud:"2.8m", Anchura:"0.9m"},
     "Motor":"Gasolina",  "Realizada":true

}

,

{
     "IdCompra": "S6784JS878C", "FechaCompra": new Date(2012,2,2),"Cliente":"Autoescuela",
     "NombreAutoescuela":"Autoescuela Ciudad Jardín", "TipoVehiculo":"Coche", "Marca":"Opel", "Modelo":"C3",
     "EquipoExtra":["RuedaExtra","ChalecoReflectante" ], "Automatico":false,
     "Precio":15000, "Dimensiones":{Altura:"2.1m", Longitud:"2.94m", Anchura:"1.5m"},
     "Motor":"Gasolina",  "Realizada":true

}

,

{
     "IdCompra": "S67834S878C", "FechaCompra": new Date(1999,2,2),"Cliente":"Autoescuela",
     "NombreAutoescuela":"Autoescuela Eiffel", "TipoVehiculo":"Coche", "Marca":"Citroen", "Modelo":"C3",
     "EquipoExtra":["RuedaExtra","ChalecoReflectante" ], "Automatico":false,
     "Precio":20000, "Dimensiones":{Altura:"2.09m", Longitud:"2.90m", Anchura:"1.5m"},
     "Motor":"Diesel",  "Realizada":true

}

,

{
     "IdCompra": "SJ5674JS878M", "FechaCompra": new Date(2014,2,6),"Cliente":"Persona", "NombreCliente":"Pepe", 
     "DNICliente":"38734787L", "EdadCliente":40, "TipoVehiculo":"Motocicleta", "Marca":"Volkswagen", 
     "Modelo":"passat", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":19000, "Dimensiones":{Altura:"1.8m", Longitud:"2m", Anchura:"0.9m"},
     "Motor":"Diesel",  "Realizada":true

}

,

{
     "IdCompra": "SJ5674JS878M", "FechaCompra": new Date(2012,2,6),"Cliente":"Persona", "NombreCliente":"Eduardo", 
     "DNICliente":"38734787M", "EdadCliente":90, "TipoVehiculo":"Motocicleta", "Marca":"Volkswagen", 
     "Modelo":"W", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":11000, "Dimensiones":{Altura:"1.8m", Longitud:"2m", Anchura:"0.9m"},
     "Motor":"Diesel",  "Realizada":true

}

,

{
     "IdCompra": "SJ5674JS878M", "FechaCompra": new Date(2013,8,8),"Cliente":"Persona", "NombreCliente":"Rafael", 
     "DNICliente":"38734787D", "EdadCliente":50, "TipoVehiculo":"Motocicleta", "Marca":"Volkswagen", 
     "Modelo":"passat", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":34000, "Dimensiones":{Altura:"1.8m", Longitud:"2m", Anchura:"0.9m"},
     "Motor":"Gasolina",  "Realizada":true

}

,

{
     "IdCompra": "SJ5674JS878M", "FechaCompra": new Date(2011,2,6),"Cliente":"Persona", "NombreCliente":"Fernando", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Motocicleta", "Marca":"Volkswagen", 
     "Modelo":"polo", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":10000, "Dimensiones":{Altura:"1.8m", Longitud:"2m", Anchura:"0.9m"},
     "Motor":"Gasolina",  "Realizada":true

}

,

{
     "IdCompra": "SJ5674JS878M", "FechaCompra": new Date(2009,2,8),"Cliente":"Persona", "NombreCliente":"Angel", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Motocicleta", "Marca":"Volkswagen", 
     "Modelo":"TCross", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":25000, "Dimensiones":{Altura:"1.8m", Longitud:"2m", Anchura:"0.9m"},
     "Motor":"Gasolina",  "Realizada":true

}

,

{
     "IdCompra": "SJ5674JS878C", "FechaCompra": new Date(2004,2,8),"Cliente":"Persona", "NombreCliente":"Roberto", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Coche", "Marca":"Volkswagen", 
     "Modelo":"TCross", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":25000, "Dimensiones":{Altura:"2.1m", Longitud:"2.75m", Anchura:"1.2m"},
     "Motor":"Diesel",  "Realizada":true
     
}
     
,

{
     "IdCompra": "SJ5674JS878C", "FechaCompra": new Date(2009,2,8),"Cliente":"Persona", "NombreCliente":"Miguel", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Coche", "Marca":"Volkswagen", 
     "Modelo":"TCross", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":40000, "Dimensiones":{Altura:"2.19m", Longitud:"2.71m", Anchura:"0.9m"},
     "Motor":"Diesel",  "Realizada":true
     
}

,

{
     "IdCompra": "SJ565H5S878F", "FechaCompra": new Date(2009,2,8),"Cliente":"Persona", "NombreCliente":"Marga", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Furgoneta", "Marca":"Tesla", 
     "Modelo":"TCross", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":90000, "Dimensiones":{Altura:"3.2m", Longitud:"4m", Anchura:"1.9m"},
     "Motor":"Diesel",  "Realizada":true
     
}

,

{
     "IdCompra": "SJ565H5S878C", "FechaCompra": new Date(2009,2,8),"Cliente":"Persona", "NombreCliente":"Ana", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Coche", "Marca":"Maserati", 
     "Modelo":"ghibli", "EquipoExtra":["ChalecoReflectante" ], "Automatico":false,
     "Precio":100000, "Dimensiones":{Altura:"1.6m", Longitud:"2.1m", Anchura:"0.9m"},
     "Motor":"Diesel",  "Realizada":true
     
}

,

{
     "IdCompra": "SJ5674JS878C", "FechaCompra": new Date(2001,2,6),"Cliente":"Persona", "NombreCliente":"Manuel", 
     "DNICliente":"38734787F", "EdadCliente":32, "TipoVehiculo":"Coche", "Marca":"Opel", 
     "Modelo":"Astra", "EquipoExtra":["RetrovisorExtra", "RuedaExtra", "ChalecoReflectante" ], "Automatico":false,
     "Precio":10000, "Dimensiones":{Altura:"1.8m", Longitud:"2m", Anchura:"1.9m"},
     "Motor":"Gasolina",  "Realizada":true

}
])




