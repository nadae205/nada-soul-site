import React from 'react';
import './App.css';

function App() {
  const publicPath = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <header>
        <h1>Hey, I’m Nada 👋</h1>
        <p>Informatics student at UCI • Creative problem solver •</p>
        <div className="floating-emoji">🎀</div>
      </header>

      <section className="quickfacts">
        <h2>⚡ Quick Facts About Me</h2>
        <ul>
          <li>I got into coding through building mini creative projects in Python</li>
          <li>I am a big fan of recursion (yeah I said it)</li>
          <li>I'm currently building a personal web app that mixes aesthetic and productivity</li>
        </ul>
      </section>

      <section className="barista">
        <h2>I am also a professional barista!</h2>
        <p>I try to craft the best espressos that I can to make my customers have a great experience</p>
        <img
          src={`${publicPath}/cof.jpg`}
          alt="Nada making coffee"
          style={{
            width: '220px',
            height: '150px',
            borderRadius: '12px',
            objectFit: 'cover',
            display: 'block',
            margin: '1rem auto'
          }}
        />
      </section>

      <section className="music">
        <h2>🎧 Music That Keeps Me Going</h2>
        <p>I code best when I'm listening to hip hop, alt rock, or anything with flow</p>
        <iframe
          src="https://open.spotify.com/embed/track/0eGsygTp906u18L0Oimnem"
          width="280"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media"
          allowFullScreen
          title="Nada's Coding Jam - Nirvana"
          style={{ borderRadius: '12px', display: 'block', margin: '1rem auto' }}
        ></iframe>
      </section>

      <section className="learning">
        <h2>💡 Stuff I Love Learning About</h2>
        <ul>
          <li>How the brain adapts</li>
          <li>How algorithms relate to puzzles</li>
          <li>How tech design can impact mental health + motivation and a positive outlook on life</li>
        </ul>
      </section>

      <section className="theory">
        <h2>📚 Theory & Philosophy</h2>
        <p>
          I’m interested in how big ideas connect with tech — especially things like logic, structure, and systems.
        </p>
        <ul>
          <li>I’ve been curious about how algorithms reflect decision-making</li>
          <li>I like exploring questions around design, ethics, and information</li>
          <li>Philosophy reminds me there’s always more than one way to see things</li>
        </ul>
      </section>

      <section className="art-section">
        <h2>🎨 My Artistic Side</h2>
        <p>
          Creativity has always been at the core of how I move through the world. I’m an
          <strong> intermediate sketcher and painter</strong>, often drawing to process emotions or bring ideas to life.
          I’m also an <strong>intermediate photographer and video editor</strong>, with a growing eye for lighting,
          movement, and visual storytelling.
        </p>
        <p>
          Over the years, I’ve taken several <strong>drama and art classes</strong> that shaped my emotional expressiveness
          and confidence. These experiences have also nurtured my love for <strong>architecture</strong> — the intersection
          of structure, imagination, and beauty.
        </p>
      </section>

      {/* Images section */}
      <div className="makeup-pic">
        <img
          src={`${publicPath}/make.jpg`}
          alt="makeup"
          style={{ width: '200px', borderRadius: '12px', display: 'block', margin: '1rem auto' }}
        />
      </div>
      <div className="magnifying-pic">
        <img
          src={`${publicPath}/mag.jpg`}
          alt="magnifying"
          style={{ width: '200px', borderRadius: '12px', display: 'block', margin: '1rem auto' }}
        />
      </div>
      <div className="man-sketch">
        <img
          src={`${publicPath}/the-vitruvian-man.jpg`}
          alt="Vitruvian Man by Leonardo da Vinci"
          style={{ width: '200px', borderRadius: '12px', display: 'block', margin: '1rem auto' }}
        />
      </div>

      <footer>
        <p>Thanks for stopping by! Let’s build something cool ✨</p>
      </footer>
    </div>
  );
}

export default App;
