import type { ImageMetadata } from 'astro';
import dvagLogo from '../assets/logos/dvag.png';
import dbLogo from '../assets/logos/deutsche-bahn.png';
import manLogo from '../assets/logos/man.png';
import bafaLogo from '../assets/logos/bafa.png';

/* ------------------------------------------------------------------
   Alle Inhalte der Seite an einem Ort. Jeder Text hat eine deutsche
   und eine englische Fassung: { de: '…', en: '…' }.
   ------------------------------------------------------------------ */

export type Lang = 'de' | 'en';
export type L = Record<Lang, string>;

export const langs: Lang[] = ['de', 'en'];
export const homePath: Record<Lang, string> = { de: '/', en: '/en/' };

export const site = {
  name: 'Ömer Ayar',
  //   hält „IT Consultant“ beim Zeilenumbruch zusammen
  role: 'Senior Backend & Fullstack Developer · IT Consultant',
  company: 'AyT Consulting',
  url: 'https://oemer-ayar.de',
  // E-Mail wird im Markup nicht als Klartext ausgegeben (Spam-Schutz).
  emailUser: 'info',
  emailDomain: 'oemer-ayar.de',
  formspreeId: 'xpqwvkpg',
  // Auf false setzen, wenn gerade keine Anfragen erwünscht sind.
  available: true,
  title: {
    de: 'Ömer Ayar | Senior Backend & Fullstack Developer · IT Consultant',
    en: 'Ömer Ayar | Senior Backend & Fullstack Developer · IT Consultant',
  } as L,
  description: {
    de: 'Ömer Ayar – freiberuflicher Senior Backend & Fullstack Developer und IT Consultant aus Frankfurt. Spezialisiert auf Java, Kotlin, Spring Boot, TypeScript und Cloud-Architekturen. Offen für neue Projekte.',
    en: 'Ömer Ayar – freelance Senior Backend & Fullstack Developer and IT Consultant based in Frankfurt. Specialised in Java, Kotlin, Spring Boot, TypeScript and cloud architectures. Open for new projects.',
  } as L,
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/%C3%B6mer-ayar-95265a174/',
  xing: 'https://www.xing.com/profile/Oemer_Ayar5/',
  github: 'https://github.com/OeMA4',
  freelance: 'https://www.freelance.de/Freelancer/280602',
};

/* ---------- UI-Texte ---------- */

export const ui = {
  skip: { de: 'Zum Inhalt springen', en: 'Skip to content' },
  menu: { de: 'Menü', en: 'Menu' },
  themeToggle: { de: 'Farbschema wechseln', en: 'Toggle colour scheme' },
  langSwitch: { de: 'Sprache wählen', en: 'Choose language' },
  nav: {
    services: { de: 'Leistungen', en: 'Services' },
    projects: { de: 'Projekte', en: 'Projects' },
    tech: { de: 'Tech Stack', en: 'Tech Stack' },
    career: { de: 'Werdegang', en: 'Career' },
    about: { de: 'Über mich', en: 'About' },
    contact: { de: 'Kontakt', en: 'Contact' },
  },
  current: { de: 'Aktuell', en: 'Current' },
  sideProject: { de: 'Side Project', en: 'Side Project' },
  role: { de: 'Rolle', en: 'Role' },
  github: { de: 'Auf GitHub ansehen', en: 'View on GitHub' },
  rights: { de: 'Alle Rechte vorbehalten.', en: 'All rights reserved.' },
  top: { de: 'Nach oben', en: 'Back to top' },
} satisfies Record<string, L | Record<string, L>>;

/* ---------- Hero ---------- */

export const hero = {
  available: { de: 'Offen für neue Projekte', en: 'Open for new projects' },
  eyebrow: { de: 'Freiberuflicher IT Consultant · Frankfurt am Main', en: 'Freelance IT Consultant · Frankfurt am Main' },
  description: {
    de: 'Ich entwickle skalierbare Backend-Systeme und moderne Web-Applikationen. Mit über <strong>10 Jahren Erfahrung</strong> in der Softwareentwicklung und einem Fokus auf <strong>KI-gestütztes Agentic Coding</strong> helfe ich Unternehmen, komplexe technische Herausforderungen effizienter zu meistern.',
    en: 'I build scalable backend systems and modern web applications. With over <strong>10 years of experience</strong> in software development and a focus on <strong>AI-powered agentic coding</strong>, I help companies tackle complex technical challenges more efficiently.',
  },
  ctaPrimary: { de: 'Projekt anfragen', en: 'Start a conversation' },
  ctaSecondary: { de: 'Projekte ansehen', en: 'View projects' },
  photoCaption: { de: 'Aktuell: IT Consultant @ DVAG', en: 'Currently: IT Consultant @ DVAG' },
  photoAlt: { de: 'Porträt von Ömer Ayar', en: 'Portrait of Ömer Ayar' },
};

export const facts: { value: L; label: L }[] = [
  { value: { de: '10+', en: '10+' }, label: { de: 'Jahre Erfahrung', en: 'Years of experience' } },
  { value: { de: '8+', en: '8+' }, label: { de: 'Projekte', en: 'Projects' } },
  { value: { de: '6+', en: '6+' }, label: { de: 'Unternehmen', en: 'Companies' } },
  { value: { de: 'Frankfurt', en: 'Frankfurt' }, label: { de: 'Remote & Reisebereitschaft', en: 'Remote & willing to travel' } },
];

/* ---------- Leistungen ---------- */

export const services = {
  title: { de: 'Leistungen', en: 'Services' },
  intro: { de: 'Wobei ich Teams unterstütze', en: 'How I support teams' },
  items: [
    {
      title: { de: 'Backend-Entwicklung', en: 'Backend development' },
      text: {
        de: 'Skalierbare Services in Microservice-Umgebungen – mit Java, Kotlin und Spring Boot, sauber getestet, sicher nach OWASP-Standards und mit Blick auf Performance.',
        en: 'Scalable services in microservice environments – built with Java, Kotlin and Spring Boot, properly tested, secured following OWASP standards and designed for performance.',
      },
    },
    {
      title: { de: 'Architektur & Consulting', en: 'Architecture & consulting' },
      text: {
        de: 'Technische Konzeption, Code Reviews und Qualitätssicherung. Fundiert durch die iSAQB-Schulung Software Architecture – Foundation Level (CPSA-F).',
        en: 'Technical design, code reviews and quality assurance. Backed by iSAQB training in Software Architecture – Foundation Level (CPSA-F).',
      },
    },
    {
      title: { de: 'Fullstack & Web', en: 'Fullstack & web' },
      text: {
        de: 'Moderne Web-Applikationen mit TypeScript, Angular, Vue und React – von der Schnittstelle bis zur Oberfläche aus einer Hand.',
        en: 'Modern web applications with TypeScript, Angular, Vue and React – from the API to the interface, all from one source.',
      },
    },
    {
      title: { de: 'Agile Zusammenarbeit', en: 'Agile delivery' },
      text: {
        de: 'Moderation von Dailys und Retrospektiven, Einführung von Retrospektiven – für Teams, die ihre Prozesse spürbar verbessern wollen.',
        en: 'Facilitating dailies and retrospectives, introducing retrospectives – for teams that want to noticeably improve their processes.',
      },
    },
    {
      title: { de: 'KI & Agentic Coding', en: 'AI & agentic coding' },
      text: {
        de: 'KI-gestützte Entwicklung mit Claude Code und GitHub Copilot – und Beratung von Teams zum effizienten KI-Einsatz: passende Workflows, gezielter Kontext und Token-Optimierung.',
        en: 'AI-assisted development with Claude Code and GitHub Copilot – and advising teams on using AI efficiently: suitable workflows, focused context and token optimisation.',
      },
    },
  ] as { title: L; text: L }[],
};

/* ---------- Projekte ---------- */

export interface Project {
  period: L;
  title: L;
  sector: L;
  description: L;
  role?: L;
  tech: string[];
  logo?: { src: ImageMetadata; alt: string };
  status?: 'current' | 'side';
  link?: string;
}

export const projects = {
  title: { de: 'Projekte', en: 'Projects' },
  intro: {
    de: 'Eine Auswahl meiner professionellen und persönlichen Projekte',
    en: 'A selection of my professional and personal projects',
  },
  items: [
    {
      period: { de: '05/2024 – heute', en: '05/2024 – present' },
      title: { de: 'Enterprise Backend-Entwicklung', en: 'Enterprise backend development' },
      sector: { de: 'Finanzdienstleistung', en: 'Financial services' },
      description: {
        de: 'Backend-Entwicklung in einer Microservice-Architektur. Innerhalb von sechs Monaten nach Projekteinstieg ging das Produkt gemeinsam mit dem Team in Produktion; seitdem Begleitung in Betrieb und Wartung sowie weitere Produkte mitentwickelt und live gebracht. Retrospektiven eingeführt und moderiert – für ein einheitliches Vorgehen bei Bugs, Problemlösung und Kommunikation. Seit Anfang 2026 überwiegend KI-gestützte Entwicklung – zunächst mit Claude Code, inzwischen mit GitHub Copilot.',
        en: 'Backend development in a microservice architecture. Within six months of joining, the product went into production together with the team; since then supporting operations and maintenance and helping build and launch further products. Introduced and facilitated retrospectives – giving the team a shared approach to bugs, problem solving and communication. Since early 2026, development has been predominantly AI-assisted – first with Claude Code, now with GitHub Copilot.',
      },
      role: {
        de: 'Senior Backend Developer',
        en: 'Senior Backend Developer',
      },
      tech: [
        'Kotlin',
        'Java 21',
        'Spring Boot 4',
        'TypeScript',
        'Angular 17',
        'PostgreSQL',
        'Keycloak',
        'Docker',
        'Microsoft Azure',
        'Kubernetes',
        'GitHub Actions',
        'OpenTelemetry',
        'Grafana',
        'Playwright',
        'GitHub Copilot',
        'Claude Code',
      ],
      logo: { src: dvagLogo, alt: 'DVAG' },
      status: 'current',
    },
    {
      period: { de: '2024 – in Entwicklung', en: '2024 – in development' },
      title: { de: 'KFZ-Verwaltungs-WebApp', en: 'Vehicle management web app' },
      sector: { de: 'Persönliches Projekt', en: 'Personal project' },
      description: {
        de: 'Eine B2C-Web-Applikation zur Verwaltung von Fahrzeugen, Wartungshistorie, Kosten und Dokumenten. Entwickelt mit React und modernen Web-Technologien. In Arbeit: KI-Funktionen mit Spring AI – Belege automatisch auslesen und Fragen zur Wartungshistorie beantworten (RAG).',
        en: 'A B2C web application for managing vehicles, maintenance history, costs and documents. Built with React and modern web technologies. In progress: AI features with Spring AI – automatically extracting data from receipts and answering questions about the maintenance history (RAG).',
      },
      tech: ['React', 'TypeScript', 'Node.js', 'Spring AI'],
      status: 'side',
      link: links.github,
    },
    {
      period: { de: '07/2022 – 03/2024', en: '07/2022 – 03/2024' },
      title: { de: 'Fullstack-Entwicklung', en: 'Fullstack development' },
      sector: { de: 'Public Sector', en: 'Public sector' },
      description: {
        de: 'Ablösung einer Bestandsanwendung durch eine Neuentwicklung in Java, Spring Boot und Angular – von der fachlichen Anforderung bis zum termingerechten Livegang und der anschließenden Betreuung im Betrieb. Zusätzlich Aufbau einer UI-Library, die in mindestens vier Projekten im Einsatz ist.',
        en: 'Replaced a legacy application with a new build in Java, Spring Boot and Angular – from business requirements to an on-time go-live and subsequent support in operation. Also built a UI library that is used by at least four projects.',
      },
      tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MySQL', 'Docker', 'Keycloak', 'Hibernate'],
      logo: { src: bafaLogo, alt: 'BAFA' },
    },
    {
      period: { de: '11/2021 – 06/2022', en: '11/2021 – 06/2022' },
      title: { de: 'Fullstack-Entwicklung', en: 'Fullstack development' },
      sector: { de: 'Automotive', en: 'Automotive' },
      description: {
        de: 'Weiterentwicklung einer produktiven Plattform im Team, mit Fokus auf Clean Code und saubere Architektur. Entwicklung mehrerer Microservices in Test Driven Development und Anbindung externer Schnittstellen für Echtzeitdaten – in internationaler Zusammenarbeit.',
        en: 'Further development of a live platform within a team, with a focus on clean code and sound architecture. Built several microservices using test-driven development and integrated external interfaces for real-time data – working with an international team.',
      },
      tech: ['Kotlin', 'Spring Boot', 'Kafka', 'React', 'TypeScript', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'],
      logo: { src: manLogo, alt: 'MAN' },
    },
    {
      period: { de: '07/2019 – 10/2021', en: '07/2019 – 10/2021' },
      title: { de: 'Fullstack-Entwicklung', en: 'Fullstack development' },
      sector: { de: 'Logistik & Transport', en: 'Logistics & transport' },
      description: {
        de: 'Großprojekt mit rund 15 Entwickler:innen und einer umfangreichen Microservice-Landschaft, begleitet bis zum Livegang. An fünf bis sieben Microservices in Test Driven Development mitentwickelt und die Oberfläche in Vue.js aufgebaut. Anschließend Übergabe an den Kunden und Einarbeitung interner Entwickler:innen.',
        en: 'Large-scale project with around 15 developers and an extensive microservice landscape, supported through to go-live. Contributed to five to seven microservices using test-driven development and built the user interface in Vue.js. Followed by handover to the client and onboarding of their in-house developers.',
      },
      tech: ['Kotlin', 'Spring Boot', 'Kafka', 'Vue.js', 'TypeScript', 'Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'ELK Stack'],
      logo: { src: dbLogo, alt: 'Deutsche Bahn' },
    },
    {
      period: { de: '04/2018 – 06/2019', en: '04/2018 – 06/2019' },
      title: { de: 'Backend-Entwicklung', en: 'Backend development' },
      sector: { de: 'Logistik & Transport', en: 'Logistics & transport' },
      description: {
        de: 'Unterstützung des Entwicklungsteams als Werkstudent: Umsetzung fachlicher Anforderungen, Unit Tests und Entwicklung eines Excel-Tools, das in die Anwendung integriert wurde.',
        en: 'Supported the development team as a working student: implementing business requirements, unit tests and building an Excel tool that was integrated into the application.',
      },
      tech: ['Kotlin', 'Spring Boot', 'Apache POI', 'Vue.js', 'TypeScript'],
      logo: { src: dbLogo, alt: 'Deutsche Bahn' },
    },
  ] as Project[],
  industriesTitle: { de: 'Branchen-Erfahrung', en: 'Industry experience' },
  industries: [
    { de: 'Finanzdienstleistung', en: 'Financial services' },
    { de: 'Automotive', en: 'Automotive' },
    { de: 'Public Sector', en: 'Public sector' },
    { de: 'Logistik & Transport', en: 'Logistics & transport' },
  ] as L[],
};

/* ---------- Tech Stack ---------- */

// level: 'advanced' = Fortgeschritten, 'basic' = Grundkenntnisse
export interface Skill {
  name: string | L;
  level: 'advanced' | 'basic';
}

const adv = (name: string | L): Skill => ({ name, level: 'advanced' });
const basic = (name: string | L): Skill => ({ name, level: 'basic' });

export const tech = {
  title: { de: 'Tech Stack', en: 'Tech Stack' },
  intro: {
    de: 'Die Werkzeuge und Technologien, mit denen ich in Projekten arbeite',
    en: 'The tools and technologies I use in my projects',
  },
  legend: {
    advanced: { de: 'Fortgeschritten', en: 'Advanced' },
    basic: { de: 'Grundkenntnisse', en: 'Basic knowledge' },
  },
  groups: [
    {
      title: { de: 'Backend', en: 'Backend' },
      skills: [adv('Java 21'), adv('Kotlin'), adv('Spring Boot 4'), adv('TypeScript'), adv('Node.js'), adv('JUnit'), adv('Mockito'), basic('Kafka')],
    },
    {
      title: { de: 'Frontend', en: 'Frontend' },
      skills: [adv('Angular'), adv('Vue.js'), adv('TypeScript'), adv('HTML/CSS'), adv('JavaScript'), adv('Playwright'), adv('Cypress'), basic('React')],
    },
    {
      title: { de: 'Cloud & DevOps', en: 'Cloud & DevOps' },
      skills: [
        adv('Azure'),
        adv('AWS'),
        adv('Docker'),
        adv('Kubernetes'),
        adv('GitHub Actions'),
        adv('GitLab CI'),
        adv('OpenTelemetry'),
        adv('Prometheus'),
        adv('Grafana'),
        adv('Application Insights'),
      ],
    },
    {
      title: { de: 'Security', en: 'Security' },
      skills: [adv('OWASP Top 10'), adv('Secure Coding'), adv('Keycloak'), adv('OAuth 2.0 / OIDC')],
    },
    {
      title: { de: 'Tools & Datenbanken', en: 'Tools & databases' },
      skills: [adv('PostgreSQL'), adv('MySQL'), adv('MongoDB'), adv('Git'), adv('IntelliJ IDEA'), adv('Maven'), adv('ELK Stack')],
    },
    {
      title: { de: 'Methodik', en: 'Methodology' },
      skills: [adv('Scrum'), adv('Agile'), adv('Code Reviews'), adv({ de: 'Architektur-Design', en: 'Architecture design' })],
    },
    {
      title: { de: 'KI & Agentic Coding', en: 'AI & agentic coding' },
      skills: [
        adv('Claude Code'),
        adv('GitHub Copilot'),
        adv('ChatGPT'),
        adv({ de: 'KI-Beratung & Workflows', en: 'AI consulting & workflows' }),
        adv({ de: 'Token-Optimierung', en: 'Token optimisation' }),
        basic('Prompt Engineering'),
        basic('Spring AI'),
      ],
    },
  ] as { title: L; skills: Skill[] }[],
};

/* ---------- Werdegang ---------- */

export const career = {
  title: { de: 'Werdegang', en: 'Career' },
  intro: {
    de: 'Mein beruflicher Weg in der Softwareentwicklung',
    en: 'My professional journey in software development',
  },
  items: [
    {
      period: { de: '04/2024 – heute', en: '04/2024 – present' },
      title: { de: 'Freelancer / IT Consultant', en: 'Freelancer / IT Consultant' },
      company: 'AyT Consulting',
      text: {
        de: 'Selbstständiger IT Consultant mit Fokus auf Backend-Entwicklung und Software-Architektur. Aktuell im Einsatz bei der Deutschen Vermögensberatung AG.',
        en: 'Self-employed IT consultant focused on backend development and software architecture. Currently engaged at Deutsche Vermögensberatung AG.',
      },
      current: true,
    },
    {
      period: { de: '07/2022 – 03/2024', en: '07/2022 – 03/2024' },
      title: {
        de: 'Professional Developer, ab 01/2024 Senior Developer',
        en: 'Professional Developer, Senior Developer from 01/2024',
      },
      company: 'Opitz Consulting GmbH',
      text: {
        de: 'Entwicklung von Enterprise-Anwendungen im Public Sector mit Java, Spring Boot und Angular. Mentor für neue Kolleg:innen.',
        en: 'Development of enterprise applications in the public sector with Java, Spring Boot and Angular. Mentor for new colleagues.',
      },
    },
    {
      period: { de: '07/2019 – 06/2022', en: '07/2019 – 06/2022' },
      title: { de: 'Software Engineer', en: 'Software Engineer' },
      company: 'MaibornWolff GmbH',
      text: {
        de: 'Fullstack-Entwicklung in agilen Teams. Projekte für namhafte Kunden aus der Automobil- und Logistikbranche.',
        en: 'Fullstack development in agile teams. Projects for renowned clients from the automotive and logistics industries.',
      },
    },
    {
      period: { de: '09/2016 – 06/2019', en: '09/2016 – 06/2019' },
      title: { de: 'Werkstudent – Software Engineer', en: 'Working Student – Software Engineer' },
      company: 'MaibornWolff GmbH',
      text: {
        de: 'Softwareentwicklung parallel zum Studium – zunächst an internen Anwendungen, anschließend im Kundenprojekt.',
        en: 'Software development alongside my studies – first on internal applications, then in a client project.',
      },
    },
    {
      period: { de: '09/2015 – 03/2016', en: '09/2015 – 03/2016' },
      title: { de: 'Werkstudent – Anwendungstester', en: 'Working Student – Application Tester' },
      company: 'Deutsche Telekom AG',
      text: {
        de: 'Funktionstests, Test-Reports und Testpläne für eine Smart-Home-Anwendung in einem internationalen Scrum-Team.',
        en: 'Functional testing, test reports and test plans for a smart home application in an international Scrum team.',
      },
    },
  ] as { period: L; title: L; company: string; text: L; current?: boolean }[],
  qualificationsTitle: { de: 'Qualifikationen', en: 'Qualifications' },
  qualifications: [
    { title: { de: 'B.Sc. Informatik', en: 'B.Sc. Computer Science' }, text: { de: 'TU Darmstadt', en: 'TU Darmstadt' } },
    { title: { de: 'iSAQB-Schulung CPSA-F', en: 'iSAQB training CPSA-F' }, text: { de: 'Software Architecture – Foundation Level (Schulung)', en: 'Software Architecture – Foundation Level (training)' } },
  ] as { title: L; text: L }[],
  languagesTitle: { de: 'Sprachen', en: 'Languages' },
  languages: [
    { name: { de: 'Deutsch', en: 'German' }, level: { de: 'Muttersprache', en: 'Native' } },
    { name: { de: 'Türkisch', en: 'Turkish' }, level: { de: 'Muttersprache', en: 'Native' } },
    { name: { de: 'Englisch', en: 'English' }, level: { de: 'Fließend', en: 'Fluent' } },
  ] as { name: L; level: L }[],
};

/* ---------- Referenzen ---------- */

export const testimonials = {
  title: { de: 'Referenzen', en: 'References' },
  intro: {
    de: 'Feedback von Kunden und ehemaligen Arbeitgebern',
    en: 'Feedback from clients and former employers',
  },
  translatedNote: { de: '', en: 'Translated from the German original.' },
  items: [
    {
      quote: {
        de: 'Von Anfang an konnten Sie als sehr engagierter und fachkompetenter Mitarbeiter überzeugen. Komplexe technische Sachverhalte haben Sie schnell analysiert und wertvolle, kreative Lösungen erarbeitet, die bis heute tragen. Sie wurden schnell zu einem wertvollen und geschätzten Teil des Teams.',
        en: 'From the very beginning you impressed us as a highly committed and technically competent colleague. You analysed complex technical matters quickly and developed valuable, creative solutions that still hold up today. You quickly became a valued and appreciated part of the team.',
      },
      name: 'Frank Lang',
      role: { de: 'Sachgebietsleiter Onlinefachanwendungen', en: 'Head of Section, Online Applications' },
      company: 'Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)',
    },
    {
      quote: {
        de: 'Herr Ayar überzeugte uns mit seinen umfassenden, vielseitigen und sehr guten Fachkenntnissen. Alle Aufgaben führte er jederzeit vollkommen selbstständig, äußerst sorgfältig und planvoll durchdacht aus. Die Leistungen haben ausnahmslos und in jeder Beziehung unsere vollste Anerkennung gefunden.',
        en: 'Mr Ayar impressed us with his comprehensive, versatile and very strong technical expertise. He carried out all tasks entirely independently, with extreme care and in a well-planned manner. His performance earned our fullest recognition without exception and in every respect.',
      },
      name: 'Andreas Lenz & Dennis Pölzer',
      role: { de: 'Director Solutions & Manager Solutions', en: 'Director Solutions & Manager Solutions' },
      company: 'Opitz Consulting GmbH',
    },
    {
      quote: {
        de: 'Herr Ayar hat erstklassiges Fachwissen, welches er mit hervorragenden Resultaten äußerst praxisnah für unser Unternehmen umsetzte. Auch für schwierigste Problemstellungen fand er sehr effektive Lösungen. Wir bedauern es außerordentlich, einen so guten Mitarbeiter zu verlieren.',
        en: 'Mr Ayar has first-class expertise, which he applied for our company in a highly practical way and with outstanding results. He found very effective solutions even for the most difficult problems. We deeply regret losing such a good colleague.',
      },
      name: 'Venko Kisev',
      role: { de: 'Bereichsleiter IT-Sanierung', en: 'Division Lead, IT Modernisation' },
      company: 'MaibornWolff GmbH',
    },
  ] as { quote: L; name: string; role: L; company: string }[],
};

/* ---------- Über mich ---------- */

export const about = {
  title: { de: 'Über mich', en: 'About me' },
  intro: { de: 'Der Mensch hinter dem Profil', en: 'The person behind the profile' },
  imageAlt: { de: 'Ömer Ayar in Island', en: 'Ömer Ayar in Iceland' },
  paragraphs: [
    {
      de: 'Mit über 10 Jahren Erfahrung in der Softwareentwicklung habe ich ein breites Spektrum an Projekten realisiert – von Enterprise-Anwendungen für Konzerne wie Deutsche Bahn und MAN über Finanzdienstleister wie die DVAG bis hin zu einer Bundesbehörde.',
      en: 'With over 10 years of experience in software development, I have delivered a wide range of projects – from enterprise applications for corporations such as Deutsche Bahn and MAN, through financial services providers such as DVAG, to a federal authority.',
    },
    {
      de: 'Mein Fokus liegt auf der Entwicklung von <strong>skalierbaren Backend-Systemen</strong> und <strong>modernen Architekturen</strong>. Ich schätze Clean Code, durchdachte Lösungen und agile Arbeitsweisen.',
      en: 'My focus is on building <strong>scalable backend systems</strong> and <strong>modern architectures</strong>. I value clean code, well-thought-out solutions and agile ways of working.',
    },
    {
      de: 'Neben meiner Arbeit als Consultant entwickle ich eigene Side Projects, um neue Technologien zu erkunden und Ideen umzusetzen.',
      en: 'Besides my work as a consultant, I develop my own side projects to explore new technologies and bring ideas to life.',
    },
  ] as L[],
  interestsTitle: { de: 'Wenn ich nicht code', en: "When I'm not coding" },
  interests: [
    { de: 'Fußball', en: 'Football' },
    { de: 'Reisen', en: 'Travel' },
    { de: 'Kaffee', en: 'Coffee' },
    { de: 'Side Projects', en: 'Side projects' },
  ] as L[],
};

/* ---------- Kontakt ---------- */

export const contact = {
  title: { de: 'Kontakt', en: 'Contact' },
  headline: { de: 'Lassen Sie uns sprechen.', en: "Let's talk." },
  text: {
    de: 'Ich bin offen für neue Projekte – remote oder vor Ort. Interesse an einer Zusammenarbeit? Ich freue mich auf Ihre Nachricht.',
    en: 'I am open for new projects – remote or on site. Interested in working together? I look forward to hearing from you.',
  },
  direct: { de: 'Oder direkt', en: 'Or directly' },
  profile: { de: 'Profil ansehen', en: 'View profile' },
  form: {
    name: { de: 'Name', en: 'Name' },
    namePh: { de: 'Ihr Name', en: 'Your name' },
    email: { de: 'E-Mail', en: 'Email' },
    emailPh: { de: 'ihre@email.de', en: 'your@email.com' },
    subject: { de: 'Betreff', en: 'Subject' },
    subjectPh: { de: 'Worum geht es?', en: 'What is it about?' },
    message: { de: 'Nachricht', en: 'Message' },
    messagePh: { de: 'Ihre Nachricht …', en: 'Your message …' },
    submit: { de: 'Nachricht senden', en: 'Send message' },
    sending: { de: 'Wird gesendet …', en: 'Sending …' },
    success: {
      de: 'Vielen Dank – Ihre Nachricht ist angekommen. Ich melde mich zeitnah.',
      en: 'Thank you – your message has arrived. I will get back to you shortly.',
    },
    error: {
      de: 'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.',
      en: 'Something went wrong. Please try again or email me directly.',
    },
  },
};
