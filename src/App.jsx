import GradientWaves from './components/reactbits/GradientWaves.jsx';

const GH = 'https://github.com/luigiaceto';
const EMAIL = 'luigi.aceto.w@gmail.com';

// Bootstrap Icons (MIT), 16x16 paths
const CONTACTS = [
  {
    label: 'GitHub',
    href: GH,
    path: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luigi-aceto32',
    path: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'
  },
  {
    label: `Email ${EMAIL}`,
    href: `mailto:${EMAIL}`,
    path: 'M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z'
  },
  {
    label: 'CV (PDF)',
    href: '/Luigi-Aceto-CV.pdf',
    path: 'M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755'
  }
];

const timeline = [
  {
    when: 'Apr – Oct 2026',
    what: 'Edge AI Intern',
    where: 'Sensor Reply, Turin',
    points: [
      'Built an on-device RAG assistant for industrial technical manuals on a Raspberry Pi 5 with a Hailo-10H neural accelerator: local LLM inference, hybrid retrieval with Qdrant, reranking and conversational query rewriting.',
      'Wrote the PDF pipeline behind it: layout analysis, OCR, structural repair and context-aware chunking. Measured retrieval and answer quality next to latency and memory use.',
      'Worked on pick-and-place vision for industrial robots: RGB and RGB-D instance segmentation, CAD-based pose estimation, grasp selection and synthetic training data.'
    ]
  },
  {
    when: '2024 – 2026',
    what: 'MSc in Computer Engineering',
    where: 'Politecnico di Torino',
    points: [
      'Artificial Intelligence and Data Analytics track. Expected final grade 110/110.',
      'Relevant topics: Shallow & Deep Learning, Computer Vision, LLMs, Explainable AI, Reinforcement Learning, Big Data.'
    ]
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
              <ul className="hero__links">
                {CONTACTS.map(c => (
                  <li key={c.href}>
                    <a href={c.href} aria-label={c.label} title={c.label}>
                      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d={c.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
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

    </>
  );
}
