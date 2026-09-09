'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Heart,
  Leaf,
  Menu,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
const imageBase = 'https://images.unsplash.com/'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  return (
    <motion.div ref={ref} className={className} initial={reduce ? false : { opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, delay, ease }}>
      {children}
    </motion.div>
  )
}

function Stagger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>{children}</motion.div>
}

const care = [
  { icon: ShieldCheck, title: 'Safe shelter', text: 'Clean, calm spaces where every cow can rest with dignity.' },
  { icon: Leaf, title: 'Daily nutrition', text: 'Fresh fodder, grains, water, and nourishment every day.' },
  { icon: Stethoscope, title: 'Medical care', text: 'Preventive care and compassionate treatment when needed.' },
  { icon: Heart, title: 'Gau seva', text: 'A loving community devoted to protecting sacred lives.' },
]

const team = [
  { name: 'Mr. Vipul Movaliya', role: 'Founder & Sevak', image: 'https://github.com/TasvirLimbani/Image/blob/main/vd.jpg?raw=true' },
  { name: 'Mr. Tasvir Limbani', role: 'Founder & Sevak & Care Coordinator', image: 'https://github.com/TasvirLimbani/Image/blob/main/IMG_3965.JPG?raw=true' },
  { name: 'Mr. Prince Limbani', role: 'Founder & Veterinary Partner', image: 'https://github.com/TasvirLimbani/Image/blob/main/6129573237055230445.jpg?raw=true' },
]

const faqs = [
  ['Can I visit the gaushala?', 'Yes. Visitors are welcome by appointment so our team can make every visit peaceful and safe.'],
  ['How can I support a cow?', 'You can sponsor daily meals, medical care, or a full month of care through our donation program.'],
  ['Can I volunteer with the team?', 'Absolutely. We welcome help with feeding, cleaning, outreach, and community events.'],
  ['Where does my donation go?', 'Every contribution supports food, shelter, medicine, rescue, and the people who provide daily care.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)
  const [amount, setAmount] = useState(251)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Shree Kamdhenu Gaushala home"><span className="brand-mark"><Heart size={18} fill="currentColor" /></span><span>Kamdhenu<br /><small>GAUSHALA</small></span></a>
        <nav className={`nav-links  ${menuOpen ? 'is-open' : ''}`}>
          {['Our care', 'Impact', 'Team', 'Visit', 'FAQ', 'Location'].map((link) => <a href={`#${link.toLowerCase().replace(' ', '-')}`} key={link} onClick={() => setMenuOpen(false)}>{link}</a>)}
          <a className="nav-donate" href="#donate" onClick={() => setMenuOpen(false)}>Donate <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-image" />
        <div className="hero-wash" />
        <motion.div className="hero-orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 42, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="hero-orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 58, repeat: Infinity, ease: 'linear' }} />
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15, ease }} className="eyebrow"><Sparkles size={14} /> Compassion in action since 2012</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .28, ease }}>A gentle home<br /><em>for sacred lives.</em></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .52 }}>At Shree Kamdhenu Gaushala, every cow is met with care, dignity, and a place to belong. Join our circle of seva in Surat.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .68, ease }}><a className="button button-primary" href="#donate">Give daily care <ArrowRight size={17} /></a><a className="button button-ghost" href="#visit">Plan a visit <CalendarDays size={17} /></a></motion.div>
          <motion.div className="hero-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .95 }}><span className="avatar-stack"><span>♡</span><span>ॐ</span><span>✦</span></span><span>Loved and supported by <strong>1,200+ families</strong></span></motion.div>
        </div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section id="impact" className="impact-section section-pad">
        <Reveal><div className="section-kicker">The work behind the warmth</div><h2>Small acts. <em>Lasting impact.</em></h2></Reveal>
        <Stagger className="stats-grid">{[['150+', 'cows cared for'], ['365', 'days of care'], ['24/7', 'loving presence'], ['100%', 'compassion']].map(([num, label]) => <motion.div key={label} className="stat-card" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease } } }}><strong>{num}</strong><span>{label}</span></motion.div>)}</Stagger>
      </section>

      <section className="story-section section-pad">
        <Reveal className="story-image-wrap"><img src={`https://github.com/TasvirLimbani/Image/blob/main/IMG_7827%20(1).JPG?raw=true`} alt="Cows resting together in a green pasture" /><span className="image-caption">A place to rest, heal, and be loved.</span></Reveal>
        <Reveal className="story-copy" delay={.12}><div className="section-kicker">Our promise</div><h2>Care is not a moment.<br /><em>It is every day.</em></h2><p>From the first morning feeding to the final evening check, our caretakers are here. We believe seva is a practice of showing up — consistently, quietly, and with a full heart.</p><ul>{['Nutritious meals and clean water', 'Safe shelter through every season', 'Rescue, rehabilitation, and medical care'].map((item) => <li key={item}><span><Check size={14} /></span>{item}</li>)}</ul><a className="text-link" href="#our-care">Discover our care <ArrowRight size={16} /></a></Reveal>
      </section>

      <section id="our-care" className="care-section section-pad"><Reveal><div className="section-kicker">How we show up</div><h2>Four ways we<br /><em>make a difference.</em></h2></Reveal><Stagger className="care-grid">{care.map(({ icon: Icon, title, text }) => <motion.article className="care-card" key={title} variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease } } }} whileHover={{ y: -8 }}><span className="care-icon"><Icon /></span><h3>{title}</h3><p>{text}</p><ArrowRight className="card-arrow" size={18} /></motion.article>)}</Stagger></section>

      <section className="gallery-section section-pad"><Reveal><div className="section-kicker">Life at Kamdhenu</div><div className="section-heading-row"><h2>Where kindness<br /><em>takes root.</em></h2><p>Every day here is made of simple, beautiful things: a full belly, a sunny patch of ground, a gentle hand.</p></div></Reveal><Stagger className="gallery-grid">{['https://github.com/TasvirLimbani/Image/blob/main/IMG_7813.JPG?raw=true', 'https://github.com/TasvirLimbani/Image/blob/main/IMG_4694.JPG?raw=true', 'https://github.com/TasvirLimbani/Image/blob/main/IMG_5761.PNG?raw=true', 'https://github.com/TasvirLimbani/Image/blob/main/Gemini_Generated_Image_d62aqsd62aqsd62a.png?raw=true'].map((id, i) => <motion.div key={id} className={`gallery-item gallery-${i + 1}`} variants={{ hidden: { opacity: 0, scale: .94 }, show: { opacity: 1, scale: 1, transition: { duration: .8, ease } } }} whileHover={{ scale: 1.025 }}><img src={`${id}`} alt="Cows being cared for at the gaushala" /><span>{['Morning light', 'A quiet friendship', 'Safe together', 'Gentle moments', 'Open skies'][i]}</span></motion.div>)}</Stagger></section>

      <section id="donate" className="donate-section section-pad"><div className="donate-panel"><div className="donate-copy"><div className="section-kicker">Your seva, made tangible</div><h2>One meal can<br /><em>change a day.</em></h2><p>Choose a daily care contribution and help us keep every bowl full and every shelter warm.</p><div className="amounts">{[51, 101, 251, 501, 1001].map((value) => <button key={value} className={amount === value ? 'amount active' : 'amount'} onClick={() => setAmount(value)}>₹{value.toLocaleString('en-IN')}</button>)}</div><button className="button button-primary" onClick={() => { setSubmitted(true); window.setTimeout(() => { window.location.href = `https://wa.me/91966491715?text=${encodeURIComponent(`Namaste, I would like to donate ₹${amount.toLocaleString('en-IN')} to Shree Kamdhenu Gaushala.`)}` }, 700) }}>Give ₹{amount.toLocaleString('en-IN')} today <Heart size={17} fill="currentColor" /></button>{submitted && <motion.p className="success-note" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Thank you. Opening WhatsApp to complete your seva chat...</motion.p>}</div><div className="donate-visual"><img src={`https://github.com/TasvirLimbani/Image/blob/main/Gemini_Generated_Image_wpnzv4wpnzv4wpnz.png?raw=true`} alt="A calm cow looking toward the camera" /><div className="donate-stamp"><Heart size={20} fill="currentColor" /><span>Seva<br />starts<br />with us.</span></div></div></div></section>

      <section id="visit" className="visit-section section-pad"><Reveal><div className="visit-card"><div><div className="section-kicker">Come say hello</div><h2>There is always<br /><em>room at the table.</em></h2><p>Visit us in Surat for a quiet afternoon with the residents of Kamdhenu. Bring your family, your questions, and an open heart.</p><div className="visit-details"><span><Clock3 /> By appointment</span><span><MapPin /> Surat, Gujarat</span></div><a className="button button-light" href="mailto:kamdhenugaushal@gmail.com">Arrange a visit <ArrowRight size={17} /></a></div><div className="visit-photo"><img src={`https://github.com/TasvirLimbani/Image/blob/main/IMG_4607.png?raw=true`} alt="Green field where visitors can spend time with cows" /></div></div></Reveal></section>

      <section className="volunteer-section section-pad"><Reveal><div className="section-kicker">There is a place for you here</div><h2>Bring your hands.<br /><em>Bring your heart.</em></h2><p>Whether you have one hour or one hundred, your time can become shelter, nourishment, and hope.</p><a className="text-link" href="mailto:volunteer@kamdhenugaushala.org">Become a volunteer <ArrowRight size={16} /></a></Reveal></section>

      <section id="team" className="team-section section-pad"><Reveal><div className="section-kicker">The people behind the seva</div><h2>Many hands.<br /><em>One loving purpose.</em></h2></Reveal><Stagger className="team-grid">{team.map((member) => <motion.article className="team-card" key={member.name} variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease } } }} whileHover={{ y: -7 }}><img src={`${member.image}`} alt={`${member.name}, ${member.role}`} /><div><h3>{member.name}</h3><p>{member.role}</p></div></motion.article>)}</Stagger></section>

      <section className="faq-section section-pad" id="faq"><Reveal><div className="section-kicker">Questions, answered gently</div><h2>Good to <em>know.</em></h2></Reveal><div className="faq-list">{faqs.map(([question, answer], i) => <motion.div className="faq-item" key={question} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{question}</span><ChevronDown className={faqOpen === i ? 'rotated' : ''} /></button>{faqOpen === i && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: .35, ease }}>{answer}</motion.p>}</motion.div>)}</div></section>

      <section className="contact-section section-pad"><div className="contact-copy"><div className="section-kicker">Let&apos;s stay connected</div><h2>Kindness is<br /><em>better together.</em></h2><p>Have a question, a story, or a little time to give? We would love to hear from you.</p><div className="contact-links"><a href="tel:+919664917815"><Phone /> +91 96649 17815</a><a href="mailto:kamdhenugaushal@gmail.com"><MessageCircle /> kamdhenugaushal@gmail.com</a><div className="social-links"><a href="https://www.instagram.com/kamdhenu_dhun_mandal_surat__" target="_blank" rel="noreferrer" aria-label="Instagram"><strong className="social-letter">◎</strong></a><a href="https://www.facebook.com/people/Kamdhenu-Dhun-Satsang-Mandal-Surat/100084109506278/" target="_blank" rel="noreferrer" aria-label="Facebook"><strong className="social-letter">f</strong></a><a href="https://wa.me/919664917815" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a></div></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required placeholder="How can we help?" rows={4} /></label><button className="button button-primary" type="submit">Send a note <ArrowRight size={17} /></button></form></section>

      <section className="location-section section-pad" id="location"><Reveal><div className="section-kicker">Find us in Surat</div><h2>Come closer to<br /><em>the seva.</em></h2></Reveal><div className="location-grid"><div className="location-copy"><MapPin /><p>Shree Kamdhenu Gaushala<br />Surat, Gujarat, India</p><a className="text-link" href="https://maps.google.com/?q=Shree+Kamdhenu+Gaushala+Surat" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={16} /></a></div><div className="location-map-wrapper">
        <iframe
          className="location-map"
          title="Shree Kamdhenu Gaushala location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14873.61582844001!2d72.84102916717528!3d21.255471691004427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86dc2a4672debc6f%3A0xeff5221478e20f55!2sShri%20Kamdhenu%20Gaushala!5e0!3m2!1sen!2sin!4v1788951234474!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div></div></section>

      <footer className="footer"><div className="footer-top"><a href="#home" className="brand"><span className="brand-mark"><Heart size={18} fill="currentColor" /></span><span>Kamdhenu<br /><small>GAUSHALA</small></span></a><p>A gentle home for sacred lives.<br />Surat, Gujarat · India</p><div className="footer-actions"><a href="#donate">Donate</a><a href="#visit">Visit us</a><a href="#faq">FAQ</a></div></div><div className="footer-bottom"><span>© 2025 Shree Kamdhenu Gaushala</span><span>Made with seva <Heart size={13} fill="currentColor" /></span></div></footer>
    </main>
  )
}
