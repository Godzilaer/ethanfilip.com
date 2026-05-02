import '../assets/styles/home.css';

export default function Home() {
  return (
    <main className="container-fluid">
      <title>Ethan Filip&#39;s Homepage</title>

      <div className="welcome-container col-12 text-center p-4">
        <h1 className="display-1">Welcome</h1>
      </div>

      <section className='row align-items-center'>
        <div className='col-8'>
          <p className='pt-4 lead'>I am {Math.floor((new Date().getTime() - new Date("Feb 17, 2010").getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years old in 10th grade at Dover-Sherborn High School in Massachusetts. I am most interested in science, technology, and engineering, with a passion for computer science. I create projects both for enjoyment and to benefit my community.</p>

        </div>
        <div className='col-4 justify-content-center align-items-center d-flex'>
          <img src="/images/coding-symbol.webp" width="100%" />
        </div>
      </section>

      <section className='px-2'>
        <h2 className='text-center title-secondary mb-5'>Highlights</h2>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='d-flex justify-content-center h-100'>
                <a href="https://bytebrawl.app" target="_blank" rel="noreferrer noopener">
                  <img src="/images/project-thumbnails/bytebrawl.webp" className="d-block h-100" alt="ByteBrawl logo" />
                  <div className="carousel-caption rounded" style={{ background: "rgb(0 0 0 / 50%)" }}>
                    <h5>ByteBrawl</h5>
                    <p>Developing an app that teaches kids fundamental coding and robotics concepts for free.</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className='d-flex justify-content-center h-100'>
                <a href="/projects/air-traffic-troubles" target="_blank" rel="noreferrer noopener">
                  <img src="/images/project-thumbnails/air-traffic-troubles.png" className="d-block h-100" alt="Air Traffic Troubles logo" />
                  <div className="carousel-caption rounded" style={{ background: "rgb(0 0 0 / 50%)" }}>
                    <h5>Air Traffic Troubles</h5>
                    <p>Published a unique and fun strategy game after many months of development and iteration with user testing.</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className='d-flex justify-content-center h-100'>
                <img src="/images/ma-scioly-logo.gif" className="d-block h-100" alt="MA Science Olympiad Logo" />
                <div className="carousel-caption">
                  <h5>SciOly Junior Captain</h5>
                  <p>Our team placed 7th out of 77 at states in 2026, our best placement yet. I led by helping to choose teams and organizing fundraisers.  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='d-flex justify-content-center h-100'>
                <img src="/images/deca-logo.png" className="d-block h-100" alt="DECA Logo" />
                <div className="carousel-caption">
                  <h5>DECA Business Competition</h5>
                  <p>2025-2026, I participated in the Professional Selling Event (PSE), winning 1st place at districts and the 1st place exam award at MA states in my category.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='d-flex justify-content-center h-100'>
                <img src="/images/common-cathedral-logo.webp" className="d-block h-100" alt="Common Cathedral Logo" />
                <div className="carousel-caption rounded" style={{ background: "rgb(0 0 0 / 50%)" }}>
                  <h5>CityReach at Common Cathedral</h5>
                  <p>In the winter of 2025, I spent 2 days and 1 night in Boston learning about homelessness and helping by giving out clothes and meals.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='d-flex justify-content-center h-100'>
                <img src="/images/huvtsp-logo.webp" className="d-block h-100" alt="..." />
                <div className="carousel-caption">
                  <h5>HUVTSP Summer Program</h5>
                  <p>Learned fundamental entrepeneurship skills from industry leaders in the summer of 2025.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='d-flex justify-content-center h-100'>
                <img src="/images/mate-logo.png" className="d-block h-100" alt="MATE logo" />
                <div className="carousel-caption rounded" style={{ background: "rgb(0 0 0 / 50%)" }}>
                  <h5>Mission at the Eastward (MATE)</h5>
                  <p>Summer of 2024, stayed in Maine for 1 week to help rebuild a porch and part of a roof for a family in need.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </main>
  )
}