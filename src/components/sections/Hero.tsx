import Button from '../ui/Button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__container">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__heading">
            Big style for little dogs.
          </h1>
          <p className="hero__subheading">
            Lightweight, comfortable harnesses and matching leads created for puppies, toy breeds and small dogs with big personalities.
          </p>
          <div className="hero__ctas">
            <Button href="#collection" variant="primary" size="lg">
              Shop the Collection
            </Button>
            <Button to="/size-guide" variant="outline" size="lg">
              Find the Right Size
            </Button>
          </div>
        </div>
        <div className="hero__image-wrap">
          <img
            src="/assets/lifestyle/hero-dog.jpg"
            alt="Small dog wearing a stylish My Pup and Me harness outdoors"
            className="hero__image"
            width="500"
            height="625"
          />
        </div>
      </div>
    </section>
  )
}
