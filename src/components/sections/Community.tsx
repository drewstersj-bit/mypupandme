import './Community.css'

export default function Community() {
  return (
    <section className="section community" aria-labelledby="community-heading">
      <div className="container">
        <header className="community__header">
          <h2 id="community-heading">Little dogs. Big personalities.</h2>
          <p>Real dogs wearing the collection.</p>
        </header>
        <div className="community__grid">
          <div className="community__item">
            <img
              src="/assets/lifestyle/Meadow_Floral_Izzy_1_800x800.jpg"
              alt="Small dog wearing the Blue Meadow Floral harness outdoors"
              loading="lazy"
              width="800"
              height="800"
            />
          </div>
          <div className="community__item">
            <img
              src="/assets/lifestyle/Tweed_Zac_1_800x800.jpg"
              alt="Dog wearing Classic Tweed harness on a walk"
              loading="lazy"
              width="800"
              height="800"
            />
          </div>
          <div className="community__item">
            <img
              src="/assets/lifestyle/White_Vintage_Floral_2_800x800.jpg"
              alt="Small dog in White Vintage Floral harness"
              loading="lazy"
              width="800"
              height="800"
            />
          </div>
          <div className="community__item">
            <img
              src="/assets/lifestyle/Tartan_Meadow_MPAM_1_23d87b12-7171-4598-9b54-21706c0e0026_800x800.jpg"
              alt="Two small dogs wearing coordinating My Pup and Me harnesses"
              loading="lazy"
              width="800"
              height="800"
            />
          </div>
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="community__cta"
        >
          Follow our adventures →
        </a>
      </div>
    </section>
  )
}
