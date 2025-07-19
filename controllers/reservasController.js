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
//funcion para obtener reserva por id
exports.obtenerReservaPorId = (req, res) => {
    const { id } = req.params;
    const reserva = reservas.find(r => r.id === id);

    if (!reserva) {
        return res.status(404).json({
            mensaje: "Reserva no encontrada"
        });
    }
    res.json({
        mensaje: "Reserva encontrada",
        datos: reserva
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
//actualizar reserva
exports.actualizarReserva = (req, res) => {
    const { id } = req.params;
     
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ mensaje: "Debes enviar datos para actualizar" });
    }

    const reservaIndex = reservas.findIndex(reserva => reserva.id === id);
    
    if (reservaIndex === -1) {
        return res.status(404).json({ mensaje: "Reserva no encontrada" });
    }

    
    reservas[reservaIndex] = { 
        ...reservas[reservaIndex],
        ...req.body
    };

    res.json({ 
        mensaje: "Reserva actualizada", 
        datos: reservas[reservaIndex] 
    });
};
//funcion para eliminar reserva
exports.eliminarReserva = (req, res) => {
    const { id } = req.params;
   
    const reservaIndex = reservas.findIndex(r => r.id === id);

    if (reservaIndex === -1) {
        return res.status(404).json({
            mensaje: "Reserva no encontrada",
            error: true
        });
    }
    const reservaEliminada = reservas.splice(reservaIndex, 1);

    res.json({
        mensaje: "Reserva eliminada correctamente",
        datos: reservaEliminada[0],
        error: false
    });
}
