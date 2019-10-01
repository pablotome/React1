import React from 'react'

var clientes = [
    {
        "idCliente": "1", 
        "nombre" : "Juan", 
        "apellido" : "Perez", 
        "descripcion" : "Cliente con deuda", 
        "imagen" : "https://images.app.goo.gl/irVF5wepbDtaGo566", 
        "cuentas" : [
            {
                "tipo": "CA", 
                "saldo": "1500", 
            }, 
            {
                "tipo": "CC", 
                "saldo": "-3500"
            }
        ]
    },
    {
        "idCliente": "2", 
        "nombre" : "Damian", 
        "apellido" : "Gomez", 
        "descripcion" : "Cliente sin deuda", 
        "imagen" : "https://images.app.goo.gl/bpEqimkWaKYcdxPT6", 
        "cuentas" : [
            {
                "tipo": "CA", 
                "saldo": "300", 
            }, 
            {
                "tipo": "CC", 
                "saldo": "5400"
            }
        ]
    }
];


class Cuenta extends React.Component {
    render() {
        const saldo = 150;
        return (
            <ul>
                <li>Caja de ahorro con <span>{saldo.toLocaleString('es-AR', {style: "currency", currency: "ARS"})}</span></li>
                <li>Cuenta corriente</li>
            </ul>
        );
    }
}

class Cliente extends React.Component {
    constructor(props){
        super(props);
        this.agregarCuenta = this.agregarCuenta.bind(this);
    }

    agregarCuenta(idCliente){
        alert("Agrego una cuenta: " + idCliente);
    }

    render() {
        
        var listaClientes = clientes.map(function(unCliente){
            return (
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{unCliente.nombre} {unCliente.apellido} </h4>
                        <p class="card-text">{unCliente.descripcion}</p>
                        
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                        <button className="btn btn-primary" onClick={this.agregarCuenta}>Agregar Cuenta</button>
                    </div>
                </div>
            )
        }, this)

        return <div class="container">{listaClientes}</div>
    }

    /*return (
        <div>
            for(cli in clientes){
                <h1>El cliente 1 no tiene cuentas</h1>
                <Cuenta/>
            }
        </div>
    );*/
}

export default Cliente;