import React from 'react';

const Contactame = () => {
  return (
        <div> 
            <div className="card-header text-center border-0">
                <h3>Contactame</h3>
            </div>
            <div className="card-title border-0">
                <form action="/recibirCorreo" className="container-fluid" method="post">
                    <fieldset>
                        <div className="input-group mb-3">
                            <label className="input-group-text" >
                                Email
                            </label>
                            <input   className="form-control text-center" id="email" name="email" placeholder="Ingrese su Email" required type="email" />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="submit">
                                Enviar
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>)
};

export default Contactame
