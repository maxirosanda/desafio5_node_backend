module.exports = {
    hacerObjeto : function() {
        var id = Math.round(Math.random() * (10 - 1) + 1 )
        var objeto = {
            id:id ,
            title: `Producto : ${id} `,
            price:(Math.random() * (9999 - 0)+ 0).toFixed(2), 
            thumbnail : `foto${id}`
        }
        return JSON.stringify(objeto)
    }

}