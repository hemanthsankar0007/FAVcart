import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

// Landing page shown before hitting the data-heavy Home page
// Keeps things static/lightweight so users see content instantly
export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__content">
        <p className="landing__eyebrow">Welcome to FAVcart</p>
        <h1>Simplify your shopping</h1>
        <p className="landing__subtitle">
          Curated gadgets, fashion, and home essentials powered by our MongoDB + Stripe stack.
        </p>
        <div className="landing__cta">
          <Link className="cta_button" to="/shop">
            Enter Store
          </Link>
          <a className="cta_link" href="#landing-highlights">
            See highlights
          </a>
        </div>
      </div>

      <div id="landing-highlights" className="landing__highlights">
        <article>
          <h3>Fast checkout</h3>
          <p>Stripe-powered payments keep your cart flowing.</p>
        </article>
        <article>
          <h3>Curated products</h3>
          <p>Backed by MongoDB Atlas for lightning-fast search.</p>
        </article>
        <article>
          <h3>Secure accounts</h3>
          <p>JWT-authenticated API with protected routes.</p>
        </article>
      </div>
    </section>
  );
}
