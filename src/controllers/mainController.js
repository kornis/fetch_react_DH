module.exports = {
    index: (req, res) => {
        return res.json({
            meta:{
                code: res.statusCode,
            },
            data:{
                categorias: [
                    {
                        nombre: "categoría 1",
                        cantidadProductos: "10"
                    },
                    {
                        nombre: "categoría 2",
                        cantidadProductos: "63"
                    },
                    {
                        nombre: "categoría 3",
                        cantidadProductos: "50"
                    }
                ]
            }
        })
    }
}