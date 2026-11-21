import GradientWaves from './components/reactbits/GradientWaves.jsx';
import DotGrid from './components/reactbits/DotGrid.jsx';

const GH = 'https://github.com/luigiaceto';
const EMAIL = 'luigi.aceto.w@gmail.com';

const timeline = [
  {
    when: 'Apr – Oct 2026',
    what: 'Edge AI Intern',
    where: 'Sensor Reply, Turin',
    points: [
      'Built an on-device RAG assistant for industrial technical manuals on a Raspberry Pi 5 with a Hailo-10H accelerator: local LLM inference, hybrid retrieval with Qdrant, reranking and conversational query rewriting.',
      'Wrote the PDF pipeline behind it: layout analysis, OCR, structural repair and context-aware chunking. Measured retrieval and answer quality next to latency and memory use.',
      'Worked on pick-and-place vision for industrial robots: RGB and RGB-D instance segmentation, CAD-based pose estimation, grasp selection and synthetic training data.'
    ]
  },
  {
    when: '2024 – 2026',
    what: 'MSc in Computer Engineering',
    where: 'Politecnico di Torino',
    points: ['Artificial Intelligence and Data Analytics track. Expected final grade 110/110.']
  },
  {
    when: '2021 – 2024',
    what: 'BSc in Computer Engineering',
    where: 'Politecnico di Torino',
    points: ['Graduated 110/110 with honours.']
  }
];

const projects = [
  {
    name: 'TridentNet',
    what: '6D object pose estimation from RGB-D',
    repo: '6D-pose-estimation',
    body: 'A YOLO11n detector finds the object, then TridentNet reads the RGB and depth crops through two encoders, a ResNet-50 and a small depth CNN, and fuses them. Three heads predict the rotation as a quaternion, a correction to the sensor depth and the offset of the object centre. Translation comes from pinhole back-projection instead of being regressed blindly.',
    result: '96.6% mean accuracy on LINEMOD (ADD/ADD-S), ahead of DenseFusion on 9 of 13 objects.',
    stack: 'PyTorch, YOLO11, ResNet-50.'
  },
  {
    name: 'PLATO',
    what: 'Explanations for speech emotion recognition that you can listen to',
    repo: 'explainable-models-for-speech-analysis',
    body: 'Post-hoc Latent Audio proTotype Organizer. A black-box emotion classifier is trained first; its latent space is then clustered per class with K-means and every centroid is snapped to the closest real recording. Each prediction is explained by the utterances it sits closest to.',
    result: 'Evaluated for accuracy, macro F1 and fidelity to the black box on CREMA-D, IEMOCAP and TESS.',
    stack: 'PyTorch, pretrained audio encoders.'
  },
  {
    name: 'Domain randomization',
    what: 'Sim-to-real robustness for robot locomotion',
    repo: 'domain-randomization-robotic-locomotion',
    body: 'PPO agents for the MuJoCo Hopper and Walker2d, trained on a body with a torso 1 kg lighter than the one they are tested on. I compared no randomization, uniform randomization (UDR) and automatic randomization (ADR), where the range of masses widens every time the agent copes with its edges.',
    result: 'Benchmark of how far each strategy closes the gap between source and target dynamics.',
    stack: 'Gymnasium, MuJoCo, Stable-Baselines3.'
  }
];

const smaller = [
  { name: 'Pac-Man on a LandTiger board', note: 'The arcade game in bare-metal C on an LPC1768.', repo: 'pacman-landtiger-board' },
  { name: 'Stuff Happens', note: 'Web app of the card game, for the Web Applications I exam.', repo: 'stuff-happens' },
  { name: 'GeoControl', note: 'Backend and test suite for a monitoring system, Software Engineering team project.', repo: 'geocontrol' }
];

export default function App() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero__stage">
            <GradientWaves
              className="hero__waves"
              lightMode
              horizonColor="#1B1F45"
              waveColor="#2F3BE8"
              brightness={1.5}
              crestColor="#E6E8E4"
              speed={0.25}
              grain={0.12}
              parallaxStrength={0.3}
              mouseStrength={0.4}
            />
            <div>
              <h1 className="hero__name">Luigi Aceto</h1>
              <p className="hero__role">
                <span>
                  <span aria-hidden="true">📚</span> Edge AI, computer vision and ML engineering
                </span>
                <span>
                  <span aria-hidden="true">📍</span> Turin, Italy
                </span>
              </p>
            </div>
            <img
              className="hero__portrait"
              src="/portrait.webp"
              alt="Blueprint-style sketch of Luigi Aceto"
              width="763"
              height="930"
            />
          </div>
        </section>

        <section className="block" aria-labelledby="about">
          <h2 id="about" className="block__title">About</h2>
          <div className="block__content about">
            <p className="lede">
              <span aria-hidden="true">👋</span> I’m an MSc Computer Engineering student at Politecnico di Torino,
              specializing in Artificial Intelligence and Data Analytics. I’ll soon graduate with a thesis in Edge AI:
              an LLM-based assistant developed and deployed on embedded hardware.
            </p>
            <p>
              I’m interested in Machine Learning, Deep Learning and ML Systems, from model design to real-world
              deployment, and I’d like to grow into technical roles where AI, software engineering and systems meet.
              Outside of code, I enjoy digital illustration and graphic design.
            </p>
          </div>
        </section>

        <section className="block" aria-labelledby="work">
          <h2 id="work" className="block__title">Work and study</h2>
          <div className="block__content">
          <ol className="timeline">
            {timeline.map(t => (
              <li key={t.what} className="timeline__item">
                <p className="timeline__when">{t.when}</p>
                <div>
                  <h3 className="timeline__what">{t.what}</h3>
                  <p className="timeline__where">{t.where}</p>
                  {t.points.map(p => (
                    <p key={p} className="timeline__point">{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <dl className="toolbox">
            <div>
              <dt>Languages I code in</dt>
              <dd>Python, C, SQL, Java</dd>
            </div>
            <div>
              <dt>ML and AI</dt>
              <dd>PyTorch, LLMs, RAG, computer vision, YOLO, model evaluation</dd>
            </div>
            <div>
              <dt>Tools and hardware</dt>
              <dd>Git, LangGraph, Ollama, Qdrant, Raspberry Pi, NPUs</dd>
            </div>
            <div>
              <dt>Languages I speak</dt>
              <dd>Italian (native), English (IELTS Academic 7.0)</dd>
            </div>
          </dl>
          </div>
        </section>

        <section className="block" aria-labelledby="paper">
          <h2 id="paper" className="block__title">Published</h2>
          <div className="block__content">
          <article className="paper">
            <h3 className="paper__title">
              Do Multi-agent LLMs Improve Test Generation? A Study of Coverage, Mutation Score, and Cost
            </h3>
            <p className="paper__authors">
              R. Coppola, T. Fulcini, F. Giobergia, D. Randino, M. Roman, E. Scolaro, <strong>L. Aceto</strong>,
              I. I. Favero
            </p>
            <p className="paper__venue">
              SEAA 2026, Kraków. Lecture Notes in Computer Science, vol. 16863, pp. 505–520, Springer.
            </p>
            <p className="paper__summary">
              Can a team of LLM agents write better unit tests than a single one? We compared single and multi-agent
              setups on line and branch coverage, on how many injected bugs their tests catch, and on what each run
              costs.
            </p>
            <p className="paper__links">
              <a href="https://doi.org/10.1007/978-3-032-36590-3_35">Read it on Springer</a>
            </p>
          </article>
          </div>
        </section>

        <section className="block" aria-labelledby="projects">
          <h2 id="projects" className="block__title">Projects</h2>
          <div className="block__content">
          {projects.map(p => (
            <article key={p.name} className="project">
              <header className="project__head">
                <h3 className="project__name">{p.name}</h3>
                <p className="project__what">{p.what}</p>
              </header>
              <div className="project__body">
                <p>{p.body}</p>
                <p className="project__result">{p.result}</p>
                <p className="project__stack">
                  {p.stack} <a href={`${GH}/${p.repo}`}>Source on GitHub</a>
                </p>
              </div>
            </article>
          ))}

          <h3 className="smaller__title">Smaller things</h3>
          <ul className="smaller">
            {smaller.map(s => (
              <li key={s.name}>
                <a href={`${GH}/${s.repo}`}>{s.name}</a>
                <span>{s.note}</span>
              </li>
            ))}
          </ul>
          </div>
        </section>
      </main>

      <footer className="contact" aria-labelledby="contact">
        <DotGrid
          className="contact__grid"
          dotSize={4}
          gap={20}
          baseColor="#C4C8D6"
          activeColor="#2F3BE8"
          proximity={130}
          fade={0.5}
        />
        <div className="contact__inner">
          <h2 id="contact" className="block__title">Write to me</h2>
          <a className="contact__mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <p className="contact__else">
            Or find me on <a href={GH}>GitHub</a> and <a href="https://www.linkedin.com/in/luigi-aceto32">LinkedIn</a>.
            My <a href="/Luigi-Aceto-CV.pdf">CV is a PDF</a>.
          </p>
        </div>
      </footer>
    </>
  );
}
