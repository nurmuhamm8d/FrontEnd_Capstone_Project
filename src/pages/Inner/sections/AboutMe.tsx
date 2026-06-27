import styles from './AboutMe.module.scss';

export const AboutMe = () => (
  <div className={styles.aboutMe}>
    <p>
      Front-end developer in training on the EPAM Tech Orda track, with a focus on building production-quality
      React and TypeScript applications that are both maintainable and accessible. My approach combines
      structured, component-driven architecture with an eye for pixel-accurate design implementation —
      working directly from Figma specs to produce interfaces that match the intended design at every
      breakpoint. This CV application is the capstone of that journey: a fully responsive SPA with
      Redux-managed state, a mock API layer via Mirage JS, form validation through Formik and Yup,
      and a comprehensive Jest test suite — all built and verified against a real Figma design system.
    </p>
    <p>
      Beyond the EPAM curriculum, I actively explore AI-assisted development workflows. I have built
      and iterated on automation tools that integrate language models into the development cycle —
      generating commit messages, summarising build logs, drafting test scaffolding, and running
      repetitive code transformations via local Ollama models to keep iteration speed high without
      sacrificing code quality. These experiments have shaped how I think about delegation: reserving
      architectural decisions and cross-file analysis for careful human review while letting automation
      handle high-volume, low-stakes tasks such as type stubs, documentation drafts, and lint fixes.
    </p>
    <p>
      Outside the browser, I have hands-on experience with Python scripting, SQLite data modelling,
      Telegram Bot API integration, and voice-cloning pipelines using XTTS v2 and edge-tts. I approach
      every project with the same discipline I apply to front-end work: read the spec carefully, verify
      the output against a known reference, and iterate until the gap between intention and reality
      closes. I am particularly interested in roles where the front-end layer meets data-heavy or
      AI-powered backends, and where clean, testable component design is valued as much as feature
      velocity.
    </p>
  </div>
);
