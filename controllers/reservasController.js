//base simple
let reservas = [
    {

        id: "1",
        hotel: "Hotel Gatuno",
        tipo_habitacion: "doble",
        num_huespedes: "2",
        fecha_inicio: "2025-07-18",
        fecha_fin: "2025-07-25"
    }
];

//funcion para las reservas 
exports.obtenerReservas = (req, res) => {
    res.json ({
        mensaje: "Estas son las reservas",
        datos: reservas 
    });
};

//funcion para nueva reserva 
exports.crearReserva = (req, res) => {
    if (!req.body.hotel || !req.body.tipo_habitacion || !req.body.num_huespedes || !req.body.fecha_inicio || !req.body.fecha_fin) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    }
    const nuevaReserva = {
        id: (reservas.length + 1).toString(),
        hotel: req.body.hotel,
        tipo_habitacion: req.body.tipo_habitacion,
        num_huespedes: req.body.num_huespedes,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin
    };
    reservas.push(nuevaReserva);
    res.json({
        mensaje: "Reserva creada correctamente",
        datos: nuevaReserva
    });
}