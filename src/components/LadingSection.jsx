import './LadingSection.css';

function LadingSection({ image }) {
  return (
    <section className="container-fluid px-0">
      <div class="row align-items-center no-gutters">
        <div class="col-lg-6">
          <div
            id="headingsContainer"
            class="text-white text-center d-none d-lg-block"
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
        <div class="col-lg-6">
          <img class="img-fluid" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default LadingSection;
