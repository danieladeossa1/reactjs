import institucion from '../assets/images/institucion1.jpg'
import estudiantes from '../assets/images/estudiantes.jpg'
import school from '../assets/images/school.jpg'
function Banner() {
    return (
        <div classNameName="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={institucion} className="d-block w-100" width="100%" height ="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={estudiantes} className="d-block w-100" width="100%" height ="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={school} className="d-block w-100" width="100%" height ="500" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
}
export default Banner;