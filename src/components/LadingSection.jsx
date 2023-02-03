import './LadingSection.css';

function LadingSection({ title, text, image, type, alt }) {
  if (type === 'type1') {
    return (
      <section className="container-fluid px-0">
        <div className="row align-items-center no-gutters landing-section">
          <div className="col-md-6 order-2 order-md-1 px-0">
            <img className="img-fluid" src={image} alt={alt} />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 mb-5 mb-md-0 content">
                <h2>{title}</h2>
                <img
                  className="d-none d-lg-inline"
                  src="assets/lolli_icon.png"
                  alt="lollipop icon"
                />
                <p className="lead">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (type === 'type2') {
    return (
      <div className="row align-items-center no-gutters landing-section">
        <div className="col-md-6 text-center">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8 mb-5 mb-md-0 content">
              <h2>{title}</h2>
              <img
                className="d-none d-lg-inline"
                src="assets/lolli_icon.png"
                alt=""
              />
              <p className="lead">{text}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <img className="img-fluid" src={image} alt={alt} />
        </div>
      </div>
    );
  }

  return (
    <section className="container-fluid px-0">
      <div className="row align-items-center no-gutters">
        <div className="col-lg-6">
          <div
            id="headingsContainer"
            className="text-white text-center d-none d-lg-block"
          >
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
            <h1>
              MUSEUM<span>/</span>OF<span>/</span>CANDY
            </h1>
          </div>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid" src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}

export default LadingSection;
