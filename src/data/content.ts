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
  role: 'Senior Fullstack Developer & IT Consultant',
  company: 'AyT Consulting',
  url: 'https://oemer-ayar.de',
  // E-Mail wird im Markup nicht als Klartext ausgegeben (Spam-Schutz).
  emailUser: 'info',
  emailDomain: 'oemer-ayar.de',
  formspreeId: 'xpqwvkpg',
  // Auf false setzen, wenn gerade keine Anfragen erwünscht sind.
  available: true,
  title: {
    de: 'Ömer Ayar | Senior Fullstack Developer & IT Consultant',
    en: 'Ömer Ayar | Senior Fullstack Developer & IT Consultant',
  } as L,
  description: {
    de: 'Ömer Ayar – freiberuflicher Senior Fullstack Developer & IT Consultant aus Frankfurt. Spezialisiert auf Java, Kotlin, Spring Boot, TypeScript und Cloud-Architekturen. Offen für neue Projekte.',
    en: 'Ömer Ayar – freelance Senior Fullstack Developer & IT Consultant based in Frankfurt. Specialised in Java, Kotlin, Spring Boot, TypeScript and cloud architectures. Open for new projects.',
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
    de: 'Ich entwickle skalierbare Backend-Systeme und moderne Web-Applikationen. Mit über <strong>8 Jahren Erfahrung</strong> in der Softwareentwicklung und einem Fokus auf <strong>AI-gestütztes Agentic Coding</strong> helfe ich Unternehmen, komplexe technische Herausforderungen effizienter zu meistern.',
    en: 'I build scalable backend systems and modern web applications. With over <strong>8 years of experience</strong> in software development and a focus on <strong>AI-powered agentic coding</strong>, I help companies tackle complex technical challenges more efficiently.',
  },
  ctaPrimary: { de: 'Projekt anfragen', en: 'Start a conversation' },
  ctaSecondary: { de: 'Projekte ansehen', en: 'View projects' },
  photoCaption: { de: 'Aktuell: IT Consultant @ DVAG', en: 'Currently: IT Consultant @ DVAG' },
  photoAlt: { de: 'Porträt von Ömer Ayar', en: 'Portrait of Ömer Ayar' },
};

export const facts: { value: L; label: L }[] = [
  { value: { de: '8+', en: '8+' }, label: { de: 'Jahre Erfahrung', en: 'Years of experience' } },
  { value: { de: '15+', en: '15+' }, label: { de: 'Projekte', en: 'Projects' } },
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
        de: 'Skalierbare Services in Microservice-Umgebungen – mit Java, Kotlin und Spring Boot, sauber getestet und mit Blick auf Performance.',
        en: 'Scalable services in microservice environments – built with Java, Kotlin and Spring Boot, properly tested and designed for performance.',
      },
    },
    {
      title: { de: 'Architektur & Consulting', en: 'Architecture & consulting' },
      text: {
        de: 'Technische Konzeption, Code Reviews und Qualitätssicherung. Zertifiziert als Certified Professional for Software Architecture (CPSA-F).',
        en: 'Technical design, code reviews and quality assurance. Certified Professional for Software Architecture (CPSA-F).',
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
        de: 'Einführung und Moderation von Dailys, Refinements und Retrospektiven – für Teams, die ihre Prozesse spürbar verbessern wollen.',
        en: 'Introducing and facilitating dailies, refinements and retrospectives – for teams that want to noticeably improve their processes.',
      },
    },
    {
      title: { de: 'AI & Agentic Coding', en: 'AI & agentic coding' },
      text: {
        de: 'AI-gestützte Entwicklung mit Werkzeugen wie Claude Code, um komplexe Aufgaben schneller und strukturierter umzusetzen.',
        en: 'AI-assisted development with tools such as Claude Code to deliver complex work faster and in a more structured way.',
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
      period: { de: '2023 – heute', en: '2023 – present' },
      title: { de: 'Enterprise Backend-Entwicklung', en: 'Enterprise backend development' },
      sector: { de: 'Finanzdienstleistung', en: 'Financial services' },
      description: {
        de: 'Entwicklung und Architektur von Backend-Services in einem Microservice-Umfeld. Verantwortlich für technische Konzeption, Code Reviews und Qualitätssicherung. Zusätzlich Prozessoptimierung durch Einführung und Moderation agiler Meetings.',
        en: 'Development and architecture of backend services in a microservices environment. Responsible for technical design, code reviews and quality assurance. Additionally driving process optimisation by introducing and facilitating agile meetings.',
      },
      role: {
        de: 'Backend-Entwicklung, Architektur-Consulting & Scrum-Moderation',
        en: 'Backend development, architecture consulting & Scrum facilitation',
      },
      tech: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'AWS'],
      logo: { src: dvagLogo, alt: 'DVAG' },
      status: 'current',
    },
    {
      period: { de: '2024 – in Entwicklung', en: '2024 – in development' },
      title: { de: 'KFZ-Verwaltungs-WebApp', en: 'Vehicle management web app' },
      sector: { de: 'Persönliches Projekt', en: 'Personal project' },
      description: {
        de: 'Eine B2C-Web-Applikation zur Verwaltung von Fahrzeugen, Wartungshistorie, Kosten und Dokumenten. Entwickelt mit React und modernen Web-Technologien.',
        en: 'A B2C web application for managing vehicles, maintenance history, costs and documents. Built with React and modern web technologies.',
      },
      tech: ['React', 'TypeScript', 'Node.js'],
      status: 'side',
      link: links.github,
    },
    {
      period: { de: '2022 – 2023', en: '2022 – 2023' },
      title: { de: 'Fullstack-Entwicklung', en: 'Fullstack development' },
      sector: { de: 'Logistik & Transport', en: 'Logistics & transport' },
      description: {
        de: 'Entwicklung modularer Softwarekomponenten in einem Enterprise-Umfeld. Etablierung agiler Arbeitsmethoden durch Einführung von Refinements und Moderation von Team-Retrospektiven.',
        en: 'Development of modular software components in an enterprise environment. Establishing agile working methods by introducing refinements and facilitating team retrospectives.',
      },
      tech: ['Java', 'Spring Boot', 'Angular', 'Scrum'],
      logo: { src: dbLogo, alt: 'Deutsche Bahn' },
    },
    {
      period: { de: '2021 – 2022', en: '2021 – 2022' },
      title: { de: 'Backend-Entwicklung', en: 'Backend development' },
      sector: { de: 'Logistik & Transport', en: 'Logistics & transport' },
      description: {
        de: 'Entwicklung interner Verwaltungssysteme mit Fokus auf Performance und Skalierbarkeit. Einführung strukturierter Dailys und kontinuierliche Prozessverbesserung durch regelmäßige Retrospektiven.',
        en: 'Development of internal management systems with a focus on performance and scalability. Introduction of structured dailies and continuous process improvement through regular retrospectives.',
      },
      tech: ['Kotlin', 'Spring Boot', 'Vue.js', 'Scrum'],
      logo: { src: dbLogo, alt: 'Deutsche Bahn' },
    },
    {
      period: { de: '2019 – 2021', en: '2019 – 2021' },
      title: { de: 'Fullstack-Entwicklung', en: 'Fullstack development' },
      sector: { de: 'Automotive', en: 'Automotive' },
      description: {
        de: 'Entwicklung einer B2B-Plattform im Automotive-Umfeld. Etablierung der Scrum-Arbeitsweise im Team inkl. Moderation von Dailys, Retrospektiven und Refinements.',
        en: 'Development of a B2B platform in the automotive sector. Establishing Scrum in the team, including facilitation of dailies, retrospectives and refinements.',
      },
      tech: ['Java', 'Angular', 'Docker', 'Scrum'],
      logo: { src: manLogo, alt: 'MAN' },
    },
    {
      period: { de: '2018 – 2019', en: '2018 – 2019' },
      title: { de: 'Fullstack-Entwicklung', en: 'Fullstack development' },
      sector: { de: 'Public Sector', en: 'Public sector' },
      description: {
        de: 'Entwicklung von E-Government-Anwendungen für digitale Verwaltungsprozesse. Unterstützung bei der Einführung agiler Prozesse und Moderation von Team-Meetings zur Prozessoptimierung.',
        en: 'Development of e-government applications for digital administrative processes. Supporting the introduction of agile processes and facilitating team meetings for process optimisation.',
      },
      tech: ['Java', 'Spring', 'Angular', 'Scrum'],
      logo: { src: bafaLogo, alt: 'BAFA' },
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
    de: 'Die Werkzeuge und Technologien, mit denen ich täglich arbeite',
    en: 'The tools and technologies I work with daily',
  },
  legend: {
    advanced: { de: 'Fortgeschritten', en: 'Advanced' },
    basic: { de: 'Grundkenntnisse', en: 'Basic knowledge' },
  },
  groups: [
    {
      title: { de: 'Backend', en: 'Backend' },
      skills: [adv('Java'), adv('Kotlin'), adv('Spring Boot'), adv('TypeScript'), adv('Node.js'), adv('JUnit'), adv('Mockito'), basic('Kafka')],
    },
    {
      title: { de: 'Frontend', en: 'Frontend' },
      skills: [adv('Angular'), adv('Vue.js'), adv('TypeScript'), adv('HTML/CSS'), adv('JavaScript'), adv('Playwright'), adv('Cypress'), basic('React')],
    },
    {
      title: { de: 'Cloud & DevOps', en: 'Cloud & DevOps' },
      skills: [adv('Azure'), adv('Docker'), adv('Kubernetes'), adv('CI/CD'), basic('AWS')],
    },
    {
      title: { de: 'Tools & Datenbanken', en: 'Tools & databases' },
      skills: [adv('PostgreSQL'), adv('MySQL'), adv('MongoDB'), adv('Git'), adv('IntelliJ IDEA'), adv('Maven'), basic('ELK Stack')],
    },
    {
      title: { de: 'Methodik', en: 'Methodology' },
      skills: [adv('Scrum'), adv('Agile'), adv('Code Reviews'), adv({ de: 'Architektur-Design', en: 'Architecture design' })],
    },
    {
      title: { de: 'AI & Agentic Coding', en: 'AI & agentic coding' },
      skills: [adv('Claude Code'), adv('ChatGPT'), basic('GitHub Copilot'), basic('Prompt Engineering')],
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
      period: { de: '2024 – heute', en: '2024 – present' },
      title: { de: 'Freelancer / IT Consultant', en: 'Freelancer / IT Consultant' },
      company: 'AyT Consulting',
      text: {
        de: 'Selbstständiger IT Consultant mit Fokus auf Backend-Entwicklung und Software-Architektur. Aktuell im Einsatz bei der Deutschen Vermögensberatung AG.',
        en: 'Self-employed IT consultant focused on backend development and software architecture. Currently engaged at Deutsche Vermögensberatung AG.',
      },
      current: true,
    },
    {
      period: { de: '2022 – 2024', en: '2022 – 2024' },
      title: { de: 'Senior Software Engineer', en: 'Senior Software Engineer' },
      company: 'Opitz Consulting GmbH',
      text: {
        de: 'Entwicklung von Enterprise-Anwendungen für Kunden aus verschiedenen Branchen. Schwerpunkt auf Java/Kotlin und Cloud-Technologien.',
        en: 'Development of enterprise applications for clients from various industries. Focus on Java/Kotlin and cloud technologies.',
      },
    },
    {
      period: { de: '2016 – 2022', en: '2016 – 2022' },
      title: { de: 'Software Engineer', en: 'Software Engineer' },
      company: 'MaibornWolff GmbH',
      text: {
        de: 'Fullstack-Entwicklung in agilen Teams. Projekte für namhafte Kunden aus der Automobil- und Logistikbranche.',
        en: 'Fullstack development in agile teams. Projects for renowned clients from the automotive and logistics industries.',
      },
    },
    {
      period: { de: '2015 – 2016', en: '2015 – 2016' },
      title: { de: 'Werkstudent / Junior Developer', en: 'Working Student / Junior Developer' },
      company: 'Deutsche Telekom AG',
      text: {
        de: 'Einstieg in die professionelle Softwareentwicklung während des Studiums.',
        en: 'Entry into professional software development during my studies.',
      },
    },
  ] as { period: L; title: L; company: string; text: L; current?: boolean }[],
  qualificationsTitle: { de: 'Qualifikationen', en: 'Qualifications' },
  qualifications: [
    { title: { de: 'B.Sc. Informatik', en: 'B.Sc. Computer Science' }, text: { de: 'Bachelor of Science', en: 'Bachelor of Science' } },
    { title: { de: 'CPSA-F', en: 'CPSA-F' }, text: { de: 'Certified Professional for Software Architecture', en: 'Certified Professional for Software Architecture' } },
  ] as { title: L; text: L }[],
  languagesTitle: { de: 'Sprachen', en: 'Languages' },
  languages: [
    { name: { de: 'Deutsch', en: 'German' }, level: { de: 'Fließend', en: 'Fluent' } },
    { name: { de: 'Englisch', en: 'English' }, level: { de: 'Fließend', en: 'Fluent' } },
    { name: { de: 'Türkisch', en: 'Turkish' }, level: { de: 'Fließend', en: 'Fluent' } },
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
      de: 'Mit über 8 Jahren Erfahrung in der Softwareentwicklung habe ich ein breites Spektrum an Projekten realisiert – von Enterprise-Anwendungen für DAX-Konzerne bis hin zu innovativen Startups.',
      en: 'With over 8 years of experience in software development, I have delivered a wide range of projects – from enterprise applications for DAX corporations to innovative startups.',
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
