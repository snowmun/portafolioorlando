import React from 'react';

const yo = require ('../../img/yo.jpg');
const Presentacion = () => {
    return (
        <div>
            <section  data-aos="fade-up">
                <div className="container">
                    <div className="card border-0">
                        <div className="row g-0">
                            <div className="col-8">
                                <div className="card-body">
                                    <p className="card-text" >
                                    Mi nombre es Orlando Muñoz tengo 31 años, soy egresado de Analista Programador en el instituto Duoc UC, 
                                    en mi tiempo libre juego en el computador o veo tutoriales.
                                    </p>
                                </div>
                            </div>
                            <div className="col-4 ">
                                <img id="yo" className="img-fluid rounded-start" alt="foto mia" src={yo} />
                            </div>
                            <div className="col-12">
                                <div className="card-body">
                                
                                    <p className="card-text">
                                    Realicé esta página para mostrar un poco lo aprendido tanto en FrontEnd como BackEnd, espero sea de su agrado y 
                                    cualquier feedback o duda me pueden contactar más abajo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section> 
        </div>
    )
};
export default Presentacion
