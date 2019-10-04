var app = new Vue({
    el: '#app',
    data: {
      titulo: 'Lista alimentos con Vue js',
      alimentos: [
          {
            tipo : "carne", 
            nombre : "filete",
            cantidad : 4,
              
          },
          {
              
            tipo : "verdura", 
            nombre : "alcachofa",
            cantidad : 10,

          },
          {
            tipo : "pescado", 
            nombre : "rape",
            cantidad : 1,

          },
          {
            tipo : "carne", 
            nombre : "hamburguesa",
            cantidad : 2,

          }
      ]
    },
    methods: {
      eliminarAlimento: function(alimento){
        this.alimentos.splice(this.alimentos.indexOf(alimento), 1)
      },
      agregarAlimento: function(e){
        e.preventDefault();
        this.alimentos.push({
          tipo: this.alimentos.tipo,
          nombre: this.alimentos.nombre,
          cantidad: this.alimentos.cantidad,
        });
        this.alimentos.nombre = '';
        this.alimentos.tipo = '';
        this.alimentos.cantidad = '';
      }
    },
  })