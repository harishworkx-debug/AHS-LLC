import { useEffect } from "react";
import { Route, Switch, useLocation, Link } from "wouter";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Flame,
  Home as HomeIcon,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  Thermometer,
  Wind,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import "./index.css";
import heroImage from "./assets/ahs-hero.webp";
import technicianImage from "./assets/ahs-technician.webp";
import installationImage from "./assets/ahs-installation.webp";
import { getContent, LOCATIONS, SERVICES } from "./data/locationContent";

const PHONE = "(352) 847-1377";
const TEL = "tel:+13528471377";
const MAP = "https://maps.app.goo.gl/9pPgTumWVu12mjkA7";
const ADDRESS = "7 Hemlock Terrace Ln, Ocala, FL 34472";
const hero = heroImage;
const technician = technicianImage;
const installation = installationImage;

const services = [
  [
    "heating-repair-ocala",
    "Heating Repair",
    "Keep your Ocala home comfortable with practical, responsive heating repair for furnaces, heat pumps, and whole-home systems.",
  ],
  [
    "furnace-repair-ocala",
    "Furnace Repair",
    "Furnace troubleshooting and repair for airflow issues, ignition problems, uneven heat, and unusual system behavior.",
  ],
  [
    "furnace-installation-ocala",
    "Furnace Installation",
    "Thoughtful furnace replacement and installation planning for efficient, dependable comfort in Ocala.",
  ],
  [
    "hvac-repair-ocala",
    "HVAC Repair",
    "One trusted call for heating and cooling repair, system diagnostics, and comfort concerns throughout Ocala.",
  ],
  [
    "ac-repair-ocala",
    "AC Repair",
    "Get your air conditioning back to comfortable with focused diagnosis and repair for common Florida cooling issues.",
  ],
  [
    "ac-installation-ocala",
    "AC Installation",
    "Modern AC installation and replacement guidance built around your home's layout, comfort goals, and budget.",
  ],
  [
    "heat-pump-service-ocala",
    "Heat Pump Service",
    "Heat pump maintenance, repair, and comfort checks for efficient year-round heating and cooling.",
  ],
  [
    "hvac-maintenance-ocala",
    "HVAC Maintenance",
    "Seasonal HVAC maintenance that helps catch small issues early and keeps your system working hard in Florida weather.",
  ],
  [
    "thermostat-service-ocala",
    "Thermostat Service",
    "Thermostat setup, replacement, and troubleshooting so your HVAC system responds the way you expect.",
  ],
  [
    "indoor-air-quality-ocala",
    "Indoor Air Quality",
    "Practical indoor air quality improvements for cleaner, more comfortable air throughout your home.",
  ],
] as const;
const areas = [
  "silver-springs-shores",
  "belleview",
  "summerfield",
  "the-villages",
  "marion-oaks",
  "dunnellon",
  "anthony",
  "reddick",
  "citra",
  "ocala-estates",
];
const areaNames: Record<string, string> = {
  "silver-springs-shores": "Silver Springs Shores",
  belleview: "Belleview",
  summerfield: "Summerfield",
  "the-villages": "The Villages",
  "marion-oaks": "Marion Oaks",
  dunnellon: "Dunnellon",
  anthony: "Anthony",
  reddick: "Reddick",
  citra: "Citra",
  "ocala-estates": "Ocala Estates",
};
const areaServices = [
  "Furnace Repair",
  "AC Repair",
  "HVAC Repair",
  "Heating Repair",
  "Heat Pump Service",
  "HVAC Maintenance",
  "Thermostat Service",
  "Indoor Air Quality",
  "AC Installation",
  "Furnace Installation",
];
function getAreaSlug(area: string) {
  const service = areaServices[areas.indexOf(area)];
  const slug = services.find(s => s[1] === service)?.[0] || "hvac-repair-ocala";
  return "/" + slug.replace("-ocala", "-" + area);
}
const allReviews = [
  [
    "mspan154",
    "Thanks to Andy and James, for a great new unit at a great price! You guys answered every question I had. Inspector even said the install was done well 🙂🇺🇲 I very highly recommend AHS LLC for any work you might need! …",
  ],
  [
    "John Grimstead",
    "My wife and I were so blessed to have Ray with AHS stop by. Just hours prior to Ray we had another company try to tell us we needed a new AC unit that would cost us $10,500. The tech did so much over selling and barely took the time to diagnose the problem, just said we had a “dinosaur unit” and there is no fixing. I reached out to a friend and he recommended that I call Ray. Within a couple hours Ray showed up and within 1 minute (seriously 1 minute) saw it was a broken wire and a seized fan. He fixed the wire and just like that our AC was working. Ray explained that he just wants to help people and have honestly and integrity. Ray for sure has that. Ray if you see this thank you so much brother for being there for us. I highly recommend AHS and ask for Ray!",
  ],
  [
    "Rena R Cantway",
    "I am so glad I called AHS for my new AC. Andy was very patient with all my questions & decision making. He quoted a good price on the  3.5 ton units I was considering -  Bryant & Goodman. I chose the Bryant & so far I am happy with it. I went up 3 seer from my old unit. This AC is very quiet & cools much better than my old unit by removing more humidity from the air. I now keep my thermostat at 79 (instead of 78 as I had my old unit set on) & I still feel a bit too chilled at times!  Andy & Ray came to install it on a Saturday & the job was complete before noon. Both Andy & Ray are very nice & personable. I definitely recommend this company!",
  ],
  [
    "Matthew Fischer",
    "Ray Powell with AHS is the best, most punctual, honest, talented, and hard working guy out there. I would recommend AHS Air Conditioning/ Heating Services to ANYONE! They showed up for multiple service calls and were more than fair and got us up and running during the hot months quicker than anyone else. When it was time to replace my unit this is who I called. If I could give more than 5 stars I would. It’s hard to find such an honest group of tradesman’s these days who stand by their work and show up. Call them and no one else, you won’t regret your decision. They’ve earned a customer for life.",
  ],
  [
    "Keri Manasa",
    "Called these guys on a Friday late afternoon 6mths pregnant, hot and looking for a fast fix. Ray offered to come that night but I didn’t want to be that pushy, Andy was there Saturday AM to checkout my unit. It wasn’t but a few days later, and may have only been one day, and they installed the new unit. They were great giving me my options and I have been cool ever since! Only a few months later they replaced grandfathers unit and even came back when a fuse went bad that wasn’t part of the unit and helped to fix that! Great family owned business with trust worthy guys that get the job done right and fast!",
  ],
  [
    "Trese Ryzan Ross",
    "Ray and Jake saved me from being taken advantage by another company.  They were on time, honest, professional, thorough and exceptionally affordable.  AHS has a new lifelong customer!",
  ],
  [
    "Deborah",
    'I contacted AHS on the recommendation of a friend.  They responded with a quote on the same day, saving me significant $ over a prior quote.  The unit being replaced was at a rental home I own.  The tenant e-mailed me to say, "The two men came today exactly on time and finished in 2.5 hours.  They were efficient, professional, and explained how everything works."  I agree with her praises and highly recommend doing business with this company.',
  ],
  [
    "Penny Smith",
    "I called AHS for a quote on replacing my system & Andy came out the same day. He & his partner came out the next afternoon to install. They were friendly, professional and very affordable. I called a couple of other well-known companies, but none came close to AHS. I am so grateful I found them & couldn't possibly say enough good about their work! Thank you Andy!",
  ],
  [
    "Dreama Robinson",
    "We had Ray Powell give us an estimate on a new a/c unit. They came out and installed it quickly and efficiently and the price was exactly the same as the estimate. We are very happy with the product and their service and will recommend to all our friends and colleagues.",
  ],
  [
    "Florida Storm",
    "I have known and used this outfit for quite some time and would only trust them to work on my AC/Heating system. In the first place they are honest, which is in short supply these days. If you need a new system or repair/maintenance of your current system they will advise options to do the job correctly and to save you money and heartache. They never try to repair or sell you something that you do not need. Thank goodness there are still companies around like AHS that believes in doing only the work that is needed and at the fairest price possible.",
  ],
  [
    "Dawn Andrews",
    "Andy and Ray are wonderful to work with. They are friendly, reliable, and totally professional with helping you with what you need. I am very satisfied with the new unit they installed, my electric bill was cut by almost 50%!!",
  ],
  [
    "Shirley Sipos",
    "I am so happy with our new air conditioner/heat pump installed by Andy and Ray.  It is super efficient and really important to me is that it is so QUIET.  Our old one was noisy inside and outside and this one is so quiet I do not notice when it is running. The house cooled down so quickly and wirh less humidity it is very comfortable.  thanks again guys for a fast and professional installation.",
  ],
  [
    "joe garcia",
    "AHS installed my new HVAC system today, Mr. Andy Scharnagl and Ray were at my home early at 7:30 am before the scheduled time 8:00 am. They were very professional and very thorough, they explained everything they did and answered all my questions. I was very impressed of how   knowledgeable and careful they were of the installation. I am very satisfied with the job well done and I would STRONGLY recommend AHS to anyone needing air conditioning repairs, service or new install.",
  ],
  [
    "Teddie Skaggs",
    "Andy is great.  Goes above and beyond to make sure every issue is taken care of.  He came out same day when our unit went down over an internal fuse and had it fixed ASAP.",
  ],
  [
    "Michael",
    "I called to set up a preventive Maintenance check up on our HVAC system. Andy was here on time. Amen.  He went over the unit an explained all he was doing. I've had this done many times in the past in my old home. So when I asked him questions he was right on and no BS.  He knows what he is doing. Friend recommend this company and I'm glad I did. A lot of other companies would give you a pitch. He'll tell you like it is and makes recommendations where he sees is needed .  Hopefully in the future they can come up with some kind of contract twice a year check up with a discount. I've had this contract in my old home for my  HVAC. Just a thought.",
  ],
  [
    "Mirella Murillo",
    "Great service, Ray responded quickly, came after hours and found the problem in just under 10min. Has great sense of humor and triple checked everything. Fare prices. Made a returning customer out of me . Thank you again Ray.",
  ],
  [
    "Jason Whitney",
    "Called Ray today asked if he could come out and look at my ac said he will try also said he was on the other side of town from me.  Well he was able to make it to my house and serviced my ac. Would recommend to my friends and family. Thank you Ray for your quality service.",
  ],
  [
    "Peg Willbond",
    "Replaced a 33 yr old furnace and air conditioner today.  Andy was professional and easy to deal with as was Ray in installation.  Looking forward to a quiet, less expensive way of heating/cooling! Thank you!",
  ],
  [
    "The crazy chicken lady",
    "The owner came out to fix my fan on my heat pump and did not have the right part. I told him I needed a run capacitor but he needed to get the make and model as it was a old unit . He got all the information and put on a part that he had in his truck which worked for one hour Then I had to wait three days for him to return and I gave him the name of a parts co. In Ocala that had the part. He returned on Monday and put the new capacitor in and it worked for one hour so I called him and told him it stopped working after a short period of time. He then said he would not come back and that my compressor was bad. I contacted my bank and filed a complaint as I had put it on my debit card and PNC bank has never resolved it to this day due to incompetence and deleting paperwork that I gave them. The owner that came out was totally incompetent as this was a simple fix and I was without a/c for 9 days. I was able to get another company to come out and I explained what happened. I told them what part AHS put in and they said that was the wrong part so I had them come out and they replaced the run capacitor with the correct part in 10 minutes! Since that time my a/c unit has worked perfectly! Obviously someone was clueless and incompetent from the first company! I feel I am entitled to a refund of$140 as he said he was an expert and been in the a/c business over 30 years but he couldn’t fix a simple problem😩",
  ],
  [
    "Gar M",
    "These guys replaced my HVAC system recently.  They did an excellent job at a very reasonable price.  They were no nonsense and worked quickly and efficiently.  I would definitely recommend them to anyone I know needing HVAC service in the future.",
  ],
  [
    "Kris Young",
    "Andy and Ray are very knowledgeable. They are on time,quickly installed the new unit,removed the old,left the yard clean. Couldn't be happier. Will recommend AHS air to all who will litsen. Thank you AHS",
  ],
  [
    "Mike Liston",
    "The owner of the company actually showed up to perform the repair literally not 2 hours after I called, I was at the whim of whatever it was he found, he could have said anything, or charged anything, but he founsomething easily repaired and charged me accordingly,  extremely honest and knowledgeable.  I can't say enough good things about this company without sounding like they paid me to say it.",
  ],
  [
    "James Miley",
    "I cannot say enough good things about these guys, they are quick to respond and always come in under whatever I'm ready to pay. They should be your first call for air conditioning needs in Ocala.",
  ],
  [
    "Kerri O'Malley",
    "Quick, quality, affordable service. He has fixed our unit twice over 2 year period and we have been very happy both times. I highly recommend.",
  ],
  [
    "Jackson Touchton",
    "I called in the morning to get my system checked out and boom was fixed before the afternoon, if you want fast, friendly and amazing service these are definitely the guys to call.",
  ],
  [
    "Dennis Pierce",
    "I am so happy to have choose AHS & Andy & Ray. Very reliable & professional My new unit is so much faster at cooling & much, much quieter. Thanks guys!!!!",
  ],
  [
    "Dale Ward",
    "Thank you guys you were great would recommend  your work to anybody good job reasonable  price  once again thank you",
  ],
  [
    "Linda Van Buren",
    "Thanks so much Andy for repairing our unit.  This company is fair, reasonably priced and is very knowledgeable.  Thanks for cooling us down.",
  ],
  [
    "Wesley Raynor",
    "From everything I saw they are the BEST! Very professional- Worked as a team- Cleaned everything up - They went the extra mile! I have to give them 5 stars!!",
  ],
  [
    "Diane Stahl",
    "Have a rental in delwebb, was able to take care of issue within 24 hrs...will definitely keep in my directory if when we need further assistance..",
  ],
  [
    "Eddie Ray",
    "Ray Powell and the guys at AHS are great at what they do! That guy should wear a cape this time of year! More",
  ],
  [
    "Flo Twentysecond",
    "Thank you Andy + Ray for a great unit at a great price. Works great. Job in a timely fashion. -22nd CT",
  ],
  [
    "Jason Shinham",
    "Amazing service and professionalism. These guys are the real deal. They take ownership of their systems as well, and don't try to upsell you on things you don't need. More",
  ],
  [
    "Blinda41",
    "I use them for my old house. referred them to a few friends, not a complaint by anybody.",
  ],
  [
    "Bernice Caruso",
    "The guy knew his job quick and informative I wish I had this kind of service more",
  ],
  ["Jane Tings", "Amazing guy who's honest, looks out for his community."],
  [
    "mike alers",
    "You won’t find a more reliable and honest ac company out there…..period",
  ],
  ["Jo Camp", "did excellent job seems to be  fine  would recommend to others"],
  [
    "Bruce Cain",
    "5 stars for sure, great attitude excellent work and reliable.",
  ],
  [
    "William Weaver",
    "These guys are the best in the business. Wouldn't trust anyone else.",
  ],
  ["Melyssa Vutsinas", "Best ac guy I know"],
  ["Ted Grimes", "Very good with customers"],
] as const;
const reviews = allReviews.slice(0, 4);
function setMeta(title: string, description: string, schemas?: object[]) {
  document.title = title;
  const meta =
    document.querySelector('meta[name="description"]') ||
    document.createElement("meta");
  meta.setAttribute("name", "description");
  meta.setAttribute("content", description);
  document.head.appendChild(meta);
  const canonical =
    document.querySelector('link[rel="canonical"]') ||
    document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute(
    "href",
    `https://ahsheatingair.com${window.location.pathname}`
  );
  document.head.appendChild(canonical);
  [
    ["og:title", title],
    ["og:description", description],
    ["og:url", `https://ahsheatingair.com${window.location.pathname}`],
  ].forEach(([property, content]) => {
    const tag =
      document.querySelector(`meta[property="${property}"]`) ||
      document.createElement("meta");
    tag.setAttribute("property", property);
    tag.setAttribute("content", content);
    document.head.appendChild(tag);
  });

  const existingSchemas = document.querySelectorAll(".ahs-page-schema");
  existingSchemas.forEach(el => el.remove());

  if (schemas && schemas.length > 0) {
    schemas.forEach(s => {
      const script = document.createElement("script");
      script.className = "ahs-page-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(s);
      document.head.appendChild(script);
    });
  }
}
function CallButton({
  children = "Call Now",
  outline = false,
}: {
  children?: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a href={TEL} className={`call-btn ${outline ? "call-btn-outline" : ""}`}>
      <Phone size={16} />
      {children}
    </a>
  );
}
function Logo() {
  return (
    <a href="/" className="logo" aria-label="AHS, LLC. home">
      <span className="logo-mark">
        <Flame size={17} />
      </span>
      <span>
        AHS<em>, LLC.</em>
      </span>
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setAreasOpen(false);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, []);
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <nav ref={navRef} className={open ? "nav-open" : ""}>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-drop-trigger"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="nav-drop-menu">
                  {services.slice(0, 6).map(([slug, name]) => (
                    <a
                      href={`/${slug}`}
                      key={slug}
                      onClick={() => {
                        setOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      {name}
                    </a>
                  ))}
                  <a
                    className="nav-drop-all"
                    href="/services"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    View all services <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                className="nav-drop-trigger"
                onClick={() => setAreasOpen(!areasOpen)}
                aria-expanded={areasOpen}
              >
                Service Areas <ChevronDown size={14} />
              </button>
              {areasOpen && (
                <div className="nav-drop-menu">
                  {areas.slice(0, 6).map(area => (
                    <a
                      href={getAreaSlug(area)}
                      key={area}
                      onClick={() => {
                        setOpen(false);
                        setAreasOpen(false);
                      }}
                    >
                      {areaNames[area]}
                    </a>
                  ))}
                  <a
                    className="nav-drop-all"
                    href="/service-areas"
                    onClick={() => {
                      setOpen(false);
                      setAreasOpen(false);
                    }}
                  >
                    View all service areas <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
            <a href="/about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="/contact" onClick={() => setOpen(false)}>
              Contact
            </a>
            <a href="/reviews" onClick={() => setOpen(false)}>
              Reviews
            </a>
            <CallButton>Call Now</CallButton>
          </nav>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <div className="top-strip">
        <div className="container">
          <span>
            <MapPin size={13} /> Serving Ocala and nearby communities
          </span>
          <span className="strip-phone">
            <Phone size={13} />
            <a href={TEL}>{PHONE}</a>
          </span>
        </div>
      </div>
    </>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-intro">
            AHS, LLC. is an Ocala HVAC contractor serving residential and
            commercial customers. Licensed, insured, and bonded.
          </p>
          <CallButton>Call AHS, LLC.</CallButton>
        </div>
        <div>
          <h4>Services</h4>
          {services.map(([slug, name]) => (
            <a href={`/${slug}`} key={slug}>
              {name}
            </a>
          ))}
        </div>
        <div>
          <h4>Service Areas</h4>
          {areas.map(area => (
            <a href={getAreaSlug(area)} key={area}>
              {areaNames[area]}
            </a>
          ))}
          <a className="footer-all" href="/service-areas">
            All service areas <ArrowUpRight size={13} />
          </a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={TEL}>{PHONE}</a>
          <Link href="/contact">{ADDRESS}</Link>
          <a href={MAP} target="_blank" rel="noreferrer">
            Open Google Maps <ExternalLink size={13} />
          </a>
          <Link href="/about">About AHS, LLC.</Link>
          <Link href="/reviews">Customer Reviews</Link>
          <Link href="/faq">HVAC FAQs</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} AHS, LLC. All rights reserved.
        </span>
        <span>
          FL Certified HVAC Contractor #CAC1817865 · Ocala, Florida
        </span>
      </div>
    </footer>
  );
}
function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const existing = document.getElementById("ahs-localbusiness-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "ahs-localbusiness-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HVACBusiness",
          "@id": "https://ahsheatingair.com/#organization",
          name: "AHS Heating & Air",
          legalName: "AHS, LLC.",
          url: "https://ahsheatingair.com/",
          telephone: "+13528471377",
          priceRange: "$$",
          sameAs: ["https://maps.app.goo.gl/9pPgTumWVu12mjkA7"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "7 Hemlock Terrace Ln",
            addressLocality: "Ocala",
            addressRegion: "FL",
            postalCode: "34472",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 29.17025,
            longitude: -82.15693,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "07:00",
              closes: "19:00",
            },
          ],
          areaServed: areas.map(area => ({
            "@type": "City",
            name: areaNames[area],
            addressRegion: "FL",
          })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "43",
          },
        },
      ],
    });
    document.head.appendChild(script);
  }, [location]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <a className="sticky-call" href={TEL} aria-label="Call AHS, LLC. now">
        <Phone size={17} /> <span>Call Now</span>
      </a>
    </>
  );
}
function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-title ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
function ImageShowcase({
  eyebrow,
  title,
  text,
  items,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: [string, string, string][];
}) {
  return (
    <section className="image-showcase section">
      <div className="container">
        <SectionTitle eyebrow={eyebrow} title={title} text={text} />
        <div className="image-showcase-grid">
          {items.map(([src, alt, label]) => (
            <figure className="image-showcase-card" key={src}>
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
function Home() {
  setMeta(
    "AHS Heating & Air | Top HVAC Contractor in Ocala, FL",
    "AHS Heating & Air is a licensed HVAC contractor in Ocala, FL providing 24/7 emergency AC repair, furnace repair, heat pump service & HVAC maintenance. Call (352) 847-1377."
  );
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(9,24,38,.93) 0%,rgba(9,24,38,.76) 38%,rgba(9,24,38,.10) 100%),url(${hero})`,
        }}
      >
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-copper">
              <span className="status-dot" /> Ocala's local heating contractor
            </div>
            <h1>Comfort that holds up to Florida weather.</h1>
            <p>
              Residential and commercial HVAC repair, maintenance, and
              replacement service from an Ocala contractor with more than 28
              years of experience.
            </p>
            <div className="hero-actions">
              <CallButton>Call AHS, LLC.</CallButton>
              <a href="#services" className="text-link light-link">
                Explore services <ArrowUpRight size={16} />
              </a>
              <a href="/reviews" className="text-link light-link">
                Read customer reviews <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Star size={15} fill="currentColor" /> 4.9 Google rating
              </span>
              <span>
                <MapPin size={15} /> Ocala, FL 34472
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-bar">
        <div className="container trust-items">
          <span>
            <ShieldCheck /> Practical recommendations
          </span>
          <span>
            <Wrench /> Heating + HVAC service
          </span>
          <span>
            <Clock3 /> Call for service
          </span>
        </div>
      </section>
      <section className="section" id="services">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title="A better answer for every comfort concern"
            text="From a furnace that will not start to an AC that cannot keep up, AHS, LLC. helps Ocala homeowners move from uncertainty to a clear next step."
          />
          <div className="service-grid">
            {services.slice(0, 6).map(([slug, name, desc], i) => (
              <a className="service-card" href={`/${slug}`} key={slug}>
                <div className="service-icon">
                  {i % 2 === 0 ? <Flame /> : <Snowflake />}
                </div>
                <span className="card-number">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
                <span className="card-link">
                  {name} <ArrowUpRight size={15} />
                </span>
              </a>
            ))}
          </div>
          <div className="center-link">
            <a href="/services" className="text-link">
              View all heating & HVAC services <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <ImageShowcase
        eyebrow="HVAC in action"
        title="A closer look at the work"
        text="From seasonal maintenance to whole-home comfort, these scenes reflect the practical service AHS, LLC. provides around Ocala."
        items={[
          [
            "/images/ahs-ac-maintenance.webp",
            "Technician maintaining an outdoor AC condenser",
            "AC maintenance",
          ],
          [
            "/images/ahs-family-comfort.webp",
            "Family enjoying a comfortable Florida living room",
            "Home comfort",
          ],
          [
            "/images/ahs-heat-pump.webp",
            "Heat pump beside a Florida home",
            "Heat pump service",
          ],
        ]}
      />
      <section className="split-section warm">
        <div className="container split-grid">
          <div className="image-frame">
            <img
              src={technician}
              alt="AHS HVAC technician inspecting an indoor air handler"
            />
            <span className="image-note">
              Careful work. Clear communication.
            </span>
          </div>
          <div>
            <SectionTitle
              eyebrow="AHS, LLC."
              title="A local partner for home comfort"
              text="Good HVAC service starts with listening. AHS, LLC. helps homeowners in Ocala understand what is happening with their system and what makes sense next—whether that is a repair, maintenance, or a replacement conversation."
            />
            <ul className="check-list">
              <li>
                <Check /> A focused approach to heating and cooling concerns
              </li>
              <li>
                <Check /> Straightforward service conversations
              </li>
              <li>
                <Check /> Work centered on your home and comfort priorities
              </li>
            </ul>
            <a href="/about" className="text-link">
              Learn about AHS, LLC. <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section problem-section">
        <div className="container">
          <SectionTitle
            eyebrow="When comfort changes"
            title="The small signs are worth paying attention to"
            text="Heating and cooling problems often show up as everyday annoyances before they become a bigger disruption. If something feels different, AHS, LLC. can help you understand where to start."
          />
          <div className="problem-grid">
            <div className="problem-card">
              <Thermometer />
              <h3>Uneven temperatures</h3>
              <p>
                One room is warm while another stays uncomfortable, even when
                the thermostat is set correctly.
              </p>
              <a href="/hvac-repair-ocala" className="text-link">
                HVAC Repair <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="problem-card">
              <Wrench />
              <h3>System making noise</h3>
              <p>
                Rattling, buzzing, grinding, or new sounds can be a reason to
                have the system checked.
              </p>
              <a href="/heating-repair-ocala" className="text-link">
                Heating Repair <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="problem-card">
              <Snowflake />
              <h3>AC not keeping up</h3>
              <p>
                If your home stays warm or airflow feels weak, a focused AC
                service visit may help identify the cause.
              </p>
              <a href="/ac-repair-ocala" className="text-link">
                AC Repair <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="problem-card">
              <Zap />
              <h3>Thermostat confusion</h3>
              <p>
                Settings, scheduling, and comfort can be easier when your
                thermostat is working with your system.
              </p>
              <a href="/thermostat-service-ocala" className="text-link">
                Thermostat Service <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="warm section">
        <div className="container split-grid">
          <div>
            <SectionTitle
              eyebrow="Florida home comfort"
              title="A steady home starts with the right next step"
              text="Ocala weather can put your HVAC system through long cooling seasons and sudden changes in demand. That is why it helps to pay attention to airflow, temperature changes, unusual cycling, and the way your system sounds."
            />
            <p className="body-copy">
              AHS, LLC. provides heating and HVAC services for homeowners who
              want a practical conversation about their comfort. Whether you
              need repair, maintenance, installation guidance, or indoor air
              quality help, the first step is simply describing what you are
              experiencing.
            </p>
            <CallButton>Talk With Our HVAC Team</CallButton>
          </div>
          <div className="guide-card">
            <span className="eyebrow">Home comfort checklist</span>
            <h3>Before you call, notice:</h3>
            <ul className="check-list">
              <li>
                <Check /> Which rooms feel uncomfortable
              </li>
              <li>
                <Check /> When the issue started
              </li>
              <li>
                <Check /> Whether the system is cycling or stopping
              </li>
              <li>
                <Check /> Any new sound, smell, or airflow change
              </li>
            </ul>
            <a href="/faq" className="text-link">
              Read common HVAC questions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="process-head">
            <SectionTitle
              eyebrow="How it works"
              title="A calm process from first call to done"
              text="You should not need to become an HVAC expert to get help. We keep the next steps simple."
            />
            <CallButton>Call AHS, LLC.</CallButton>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Tell us what is happening",
                "Share the symptoms, timing, and what you have noticed.",
              ],
              [
                "02",
                "Get a clear direction",
                "We look at the system and explain the practical options.",
              ],
              [
                "03",
                "Get your comfort back",
                "Move forward with the service your home actually needs.",
              ],
            ].map(([n, t, d]) => (
              <div className="process-card" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section homeowner-guide">
        <div className="container">
          <SectionTitle
            eyebrow="Homeowner guide"
            title="Small HVAC habits that make a difference"
            text="A few simple observations and routine habits can help you notice comfort changes earlier and keep your system working more consistently."
          />
          <div className="guide-grid">
            <article className="guide-tile">
              <span className="guide-index">01</span>
              <Thermometer />
              <h3>Watch the temperature balance</h3>
              <p>
                Notice whether one room is consistently warmer or cooler than
                the rest of the home. Uneven comfort can point to airflow,
                thermostat, ductwork, or equipment concerns.
              </p>
              <a href="/hvac-repair-ocala" className="text-link">
                Explore HVAC repair <ArrowUpRight size={14} />
              </a>
            </article>
            <article className="guide-tile">
              <span className="guide-index">02</span>
              <Wind />
              <h3>Pay attention to airflow</h3>
              <p>
                Weak airflow, dusty vents, or a system that runs longer than
                usual are useful details to share with your HVAC professional
                when scheduling service.
              </p>
              <a href="/indoor-air-quality-ocala" className="text-link">
                See indoor air quality <ArrowUpRight size={14} />
              </a>
            </article>
            <article className="guide-tile">
              <span className="guide-index">03</span>
              <CalendarDays />
              <h3>Plan seasonal maintenance</h3>
              <p>
                Regular maintenance gives your heating and cooling equipment a
                chance to be checked before the season puts extra demand on the
                system.
              </p>
              <a href="/hvac-maintenance-ocala" className="text-link">
                View HVAC maintenance <ArrowUpRight size={14} />
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="warm section comfort-rhythm">
        <div className="container split-grid">
          <div>
            <SectionTitle
              eyebrow="Year-round comfort"
              title="One home, changing demands"
              text="Ocala homes move through long cooling seasons, occasional cold snaps, humidity, and changing household routines. Your HVAC system has to respond to all of it."
            />
            <p className="body-copy">
              In warmer months, notice how quickly the system cools the home and
              whether it cycles normally. When temperatures drop, pay attention
              to startup, airflow, and unusual sounds. These small details help
              make a service conversation more useful.
            </p>
            <a href="/faq" className="text-link">
              Read HVAC FAQs <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="season-list">
            <div>
              <span>Summer</span>
              <strong>Cooling, airflow & humidity</strong>
              <p>
                Keep an eye on comfort consistency and how hard the AC works
                during hotter days.
              </p>
            </div>
            <div>
              <span>Winter</span>
              <strong>Heating, startup & circulation</strong>
              <p>
                Notice delayed starts, unusual cycling, or rooms that do not
                warm evenly.
              </p>
            </div>
            <div>
              <span>Every season</span>
              <strong>Maintenance & indoor air</strong>
              <p>
                Clean filters, clear access, and timely service support steadier
                comfort year-round.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section service-fit">
        <div className="container">
          <div className="service-fit-head">
            <SectionTitle
              eyebrow="For homes and businesses"
              title="HVAC service that fits the property"
              text="AHS, LLC. works with the comfort needs of residential and commercial spaces in and around Ocala."
            />
            <a href="/contact" className="text-link">
              Contact AHS, LLC. <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="fit-grid">
            <div className="fit-card">
              <HomeIcon />
              <h3>Residential comfort</h3>
              <p>
                Heating, cooling, maintenance, thermostat, and indoor air
                quality support for the place you live.
              </p>
              <a href="/services" className="text-link">
                Browse residential services <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="fit-card">
              <Building2 />
              <h3>Commercial systems</h3>
              <p>
                Practical HVAC service information for businesses that depend on
                dependable comfort and operation.
              </p>
              <a href="/contact" className="text-link">
                Discuss commercial service <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="fit-card">
              <ShieldCheck />
              <h3>Clear next steps</h3>
              <p>
                Describe what you are seeing, get a focused direction, and
                understand the service options available.
              </p>
              <a href="/about" className="text-link">
                Learn about AHS, LLC. <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="container dark-grid">
          <div>
            <SectionTitle
              light
              eyebrow="Comfort, closer to home"
              title="Heating and HVAC service around Ocala"
              text="AHS, LLC. is based in Ocala and serves nearby communities across the area. If you are not sure whether you are in range, call and ask."
            />
            <a href="/service-areas" className="text-link light-link">
              View service areas <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="area-pills">
            {areas.slice(0, 8).map(a => (
              <a href={getAreaSlug(a)} key={a}>
                {areaNames[a]} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section review-section">
        <div className="container review-grid">
          <div>
            <div className="rating">
              <Star fill="currentColor" />
              <strong>4.9</strong>
              <span>Google rating · customer reviews</span>
            </div>
            <h2>Real words from AHS customers.</h2>
            <p className="large-copy">
              These customer-provided Google review excerpts reflect what
              homeowners have shared about AHS, LLC. service, responsiveness,
              and workmanship.
            </p>
            <CallButton>Call AHS, LLC.</CallButton>
          </div>
          <div className="review-list">
            {reviews.map(([author, quote]) => (
              <article className="review-card" key={author}>
                <div className="stars">★★★★★</div>
                <blockquote>“{quote}”</blockquote>
                <small>{author} · Google review</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section home-contact">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow="Find AHS, LLC."
              title="Serving Ocala from our local home base."
              text="Call AHS, LLC. for heating, cooling, and indoor comfort service in Ocala and nearby communities."
            />
            <div className="contact-details">
              <div>
                <MapPin />
                <span>
                  <strong>Location</strong>
                  {ADDRESS}
                </span>
              </div>
              <div>
                <Phone />
                <span>
                  <strong>Phone</strong>
                  <a href={TEL}>{PHONE}</a>
                </span>
              </div>
            </div>
            <a href="/contact" className="text-link">
              Contact AHS, LLC. <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="map-card">
            <iframe
              title="AHS, LLC. service area map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111481.93876646785!2d-82.15693499999999!3d29.170253450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7cd7c19fdfd83%3A0x68110136ca4a6158!2sAHS%2C%20LLC.!5e0!3m2!1sen!2sin!4v1790574617132!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <a href={MAP} target="_blank" rel="noreferrer" className="map-link">
              Open in Google Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
      <section className="faq-band">
        <div className="container faq-cta">
          <div>
            <span className="eyebrow">Questions?</span>
            <h2>AHS, LLC. service information.</h2>
          </div>
          <div>
            <p>
              AHS, LLC. provides heating and HVAC service information for
              Ocala-area homes and businesses.
            </p>
            <div className="hero-actions">
              <CallButton>Call Now</CallButton>
              <a className="text-link light-link" href="/faq">
                Read FAQs <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Services() {
  setMeta(
    "Heating & HVAC Services | AHS, LLC. Ocala",
    "Explore heating, furnace, AC, heat pump, maintenance, thermostat, and indoor air quality services from AHS, LLC. in Ocala, FL."
  );
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Practical HVAC care for every season"
        text="From heating repair to indoor air quality, AHS, LLC. helps Ocala homeowners make confident comfort decisions."
        image={installation}
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Heating, cooling & comfort"
            title="One local team for the systems your home relies on"
            text="Florida homes need dependable cooling for long, hot seasons and thoughtful heating support when cooler weather arrives. Browse the service that best matches what you are seeing, then call AHS, LLC. for a clear next step."
          />
          <div className="service-list">
            {services.map(([slug, name, desc], i) => (
              <a href={`/${slug}`} className="service-row" key={slug}>
                <span className="row-index">0{i + 1}</span>
                <div>
                  <h2>{name}</h2>
                  <p>{desc}</p>
                </div>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </section>
      <ImageShowcase
        eyebrow="Service specialties"
        title="Built around the systems you rely on"
        text="Each service starts with careful observation and practical guidance for the equipment in your home."
        items={[
          [
            "/images/ahs-furnace-service.webp",
            "Technician inspecting a residential furnace",
            "Furnace service",
          ],
          [
            "/images/ahs-indoor-air.webp",
            "Bright home interior with clean-air features",
            "Indoor air quality",
          ],
        ]}
      />
      <section className="warm section">
        <div className="container">
          <SectionTitle
            eyebrow="Why homeowners call"
            title="Useful help, without the runaround"
            text="Whether you need a quick diagnosis, seasonal maintenance, or help thinking through a replacement, the goal is the same: understand the concern, explain the options, and keep your home comfortable."
          />
          <div className="values-grid">
            <div>
              <Flame />
              <h3>Heating service</h3>
              <p>
                Repair, furnace installation, heat pump service, and comfort
                support for Ocala homes.
              </p>
            </div>
            <div>
              <Snowflake />
              <h3>Cooling service</h3>
              <p>
                AC repair and installation for systems that need to keep up with
                Florida heat.
              </p>
            </div>
            <div>
              <ShieldCheck />
              <h3>Indoor comfort</h3>
              <p>
                Maintenance, thermostats, and indoor air quality services for a
                more consistent home.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="AHS, LLC. heating and HVAC services."
        text="Review the service information or call AHS, LLC. at (352) 847-1377."
      />
    </>
  );
}
function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section
      className="page-hero"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg,rgba(9,24,38,.92),rgba(9,24,38,.40)),url(${image})`,
            }
          : {}
      }
    >
      <div className="container">
        <span className="eyebrow eyebrow-copper">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
function Detail({ slug }: { slug: string }) {
  const item = services.find(s => s[0] === slug)!;
  const [path, name, desc] = item;

  let metaTitle = `${name} in Ocala, FL | AHS Heating & Air`;
  let metaDesc = `Need ${name.toLowerCase()} in Ocala, FL? AHS Heating & Air provides fast ${name.toLowerCase()}, diagnostic troubleshooting & local HVAC solutions. Call (352) 847-1377.`;

  if (slug === "ac-repair-ocala") {
    metaTitle =
      "AC Repair & Emergency AC Repair in Ocala, FL | AHS Heating & Air";
    metaDesc =
      "Need AC repair or 24/7 emergency AC repair in Ocala, FL? AHS Heating & Air fixes frozen coils, leaking refrigerant & cooling failures fast. Call (352) 847-1377.";
  } else if (slug === "heat-pump-service-ocala") {
    metaTitle =
      "Heat Pump Repair & Service in Ocala, FL | AHS Heating & Air";
    metaDesc =
      "Top-rated heat pump repair & service in Ocala, FL. AHS Heating & Air fixes reversing valves, defrost controls & heating coils. Call (352) 847-1377.";
  } else if (slug === "hvac-repair-ocala") {
    metaTitle = "HVAC Repair & Service in Ocala, FL | AHS Heating & Air";
    metaDesc =
      "Reliable HVAC repair in Ocala, FL. AHS Heating & Air fixes AC units, furnaces & heat pumps. Call (352) 847-1377 for prompt diagnostic service.";
  } else if (slug === "ac-installation-ocala") {
    metaTitle =
      "AC Installation & Replacement in Ocala, FL | AHS Heating & Air";
    metaDesc =
      "High-efficiency AC installation & system replacement in Ocala, FL. Custom sizing, SEER2 energy savings & quiet cooling. Call (352) 847-1377.";
  } else if (slug === "furnace-repair-ocala") {
    metaTitle = "Furnace Repair in Ocala, FL | AHS Heating & Air";
    metaDesc =
      "Trusted gas & electric furnace repair in Ocala, FL. AHS Heating & Air fixes ignition issues, flame sensors & blower motors. Call (352) 847-1377.";
  } else if (slug === "hvac-maintenance-ocala") {
    metaTitle = "HVAC Maintenance & Tune-Up in Ocala, FL | AHS Heating & Air";
    metaDesc =
      "Preventative HVAC maintenance & AC tune-ups in Ocala, FL. Clean coils, flush drain lines & optimize efficiency with AHS Heating & Air. Call (352) 847-1377.";
  }

  setMeta(metaTitle, metaDesc);
  return (
    <>
      <PageHero
        eyebrow="AHS, LLC. · Ocala, FL"
        title={`${name} in Ocala, Florida`}
        text={desc}
        image={path.includes("installation") ? installation : technician}
      />
      <section className="section">
        <div className="container detail-grid">
          <article>
            <span className="eyebrow">Service overview</span>
            <h2>Comfort support that starts with understanding the problem.</h2>
            <p>
              When your heating or cooling system is not behaving as it should,
              the most useful first step is a focused look at the symptoms. AHS,
              LLC. helps homeowners in Ocala understand what may be happening
              and what options are worth considering for their home.
            </p>
            <p>
              We keep the conversation practical—whether you need a repair, a
              system check, maintenance, or guidance on a replacement. Contact
              AHS, LLC. for service availability and scheduling.
            </p>
            <h3>What this service can help with</h3>
            <ul className="check-list">
              {[
                "Unusual noises, smells, or cycling",
                "Rooms that feel too warm or too cool",
                "Airflow, thermostat, or comfort concerns",
                "A system that is not starting or keeping up",
              ].map(x => (
                <li key={x}>
                  <Check />
                  {x}
                </li>
              ))}
            </ul>
          </article>
          <aside className="side-card">
            <div className="service-icon">
              <Thermometer />
            </div>
            <h3>Talk with the team</h3>
            <p>
              Share what you are noticing and get a clear next step for your
              Ocala home.
            </p>
            <CallButton>Call {PHONE}</CallButton>
          </aside>
        </div>
      </section>
      <section className="warm section">
        <div className="container">
          <SectionTitle eyebrow="Related Help" title="More Ways We Can Help in Ocala" />
          <div className="mini-grid">
            {services
              .filter(s => s[0] !== slug)
              .slice(0, 3)
              .map(s => (
                <Link href={`/${s[0]}`} key={s[0]}>
                  <strong>{s[1]}</strong>
                  <span>
                    Explore service <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
          </div>

          <div style={{ marginTop: "45px" }}>
            <SectionTitle
              eyebrow="Local Communities"
              title={`${name} in Surrounding Marion County Cities`}
              text={`Select a location below to view specialized ${name.toLowerCase()} details for your community.`}
            />
            <div className="related-links-grid">
              {areas.map(a => {
                const baseSlug = slug.replace("-ocala", "");
                const localLink = `/${baseSlug}-${a}`;
                return (
                  <Link key={a} href={localLink} className="related-link-card">
                    <span>
                      {name} in {areaNames[a]}
                    </span>
                    <ArrowUpRight size={14} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Contact AHS, LLC."
        text="AHS, LLC. serves Ocala and nearby communities. Contact AHS, LLC. for service information."
      />
    </>
  );
}
function Area({
  area,
  serviceName,
  serviceSlug: passedServiceSlug,
}: {
  area: string;
  serviceName?: string;
  serviceSlug?: string;
}) {
  const name = areaNames[area] || area;
  const service = serviceName || areaServices[areas.indexOf(area)];

  let sSlug = passedServiceSlug;
  if (!sSlug) {
    const fullServiceObj = services.find(s => s[1] === service);
    const fullSlug = fullServiceObj ? fullServiceObj[0] : "hvac-repair-ocala";
    sSlug = fullSlug.replace("-ocala", "");
  }

  const content = getContent(area, sSlug);
  const mainOcalaSlug =
    services.find(s => s[1] === content.service.name)?.[0] || "hvac-repair-ocala";

  setMeta(content.title, content.metaDescription, [
    content.serviceSchema,
    content.faqSchema,
    content.breadcrumbSchema,
  ]);

  return (
    <>
      <PageHero
        eyebrow={`Local HVAC Service · ${content.location.name}, FL`}
        title={`${content.service.name} in ${content.location.name}, Florida`}
        text={content.service.tagline}
        image={sSlug.includes("installation") ? installation : technician}
      />

      {/* SECTION 1: UNIQUE INTRODUCTION & OVERVIEW */}
      <section className="section">
        <div className="container detail-grid">
          <article>
            <span className="eyebrow">Local Service Overview</span>
            <h2>
              {content.service.name} Solutions for {content.location.name}{" "}
              Homeowners
            </h2>
            <p>{content.introParagraph1}</p>
            <p>{content.introParagraph2}</p>

            <div className="local-facts-box">
              <h4>Local Service Details for {content.location.name}</h4>
              <div className="local-facts-grid">
                <div>
                  <strong>Primary Zip Codes:</strong>
                  <span>{content.location.zipCodes.join(", ")}</span>
                </div>
                <div>
                  <strong>County Coverage:</strong>
                  <span>{content.location.county}</span>
                </div>
                <div>
                  <strong>Common Home Styles:</strong>
                  <span>{content.location.homeTypes}</span>
                </div>
                <div>
                  <strong>Local Environment:</strong>
                  <span>{content.location.climateFactors}</span>
                </div>
              </div>
            </div>
          </article>

          <aside className="side-card">
            <MapPin className="aside-pin" />
            <h3>Serving {content.location.name}</h3>
            <p>
              Need fast {content.service.name.toLowerCase()} in{" "}
              {content.location.name}? Contact AHS Heating & Air for honest
              diagnostic guidance and durable repairs.
            </p>
            <CallButton>Call (352) 847-1377</CallButton>
            <Link className="side-link" href={`/${mainOcalaSlug}`}>
              See {content.service.name} in Ocala <ArrowUpRight size={14} />
            </Link>
          </aside>
        </div>
      </section>

      {/* SECTION 2: SPECIFIC PROBLEMS CUSTOMERS EXPERIENCE */}
      <section className="section warm">
        <div className="container">
          <SectionTitle
            eyebrow={`Common ${content.service.name} Issues`}
            title={`Symptoms That Need ${content.service.name} in ${content.location.name}`}
            text={`If your heating or cooling system exhibits any of these warning signs, our licensed technicians can help diagnose and resolve the underlying issue quickly.`}
          />
          <div className="problem-grid">
            {content.service.problemTemplates.map((prob, idx) => (
              <div className="problem-card" key={idx}>
                {idx % 4 === 0 ? (
                  <Thermometer />
                ) : idx % 4 === 1 ? (
                  <Snowflake />
                ) : idx % 4 === 2 ? (
                  <Wrench />
                ) : (
                  <Flame />
                )}
                <h3>{prob.title}</h3>
                <p>{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CLEAR EXPLANATION OF SERVICE & WHAT TO EXPECT */}
      <section className="section">
        <div className="container">
          <div className="process-head">
            <SectionTitle
              eyebrow="Our Service Process"
              title={`What to Expect During Your ${content.service.name} Visit`}
              text={`We keep the process straightforward, transparent, and hassle-free from start to finish.`}
            />
            <CallButton>Call Now</CallButton>
          </div>
          <div className="process-grid">
            {content.service.processSteps.map((step, idx) => (
              <div className="process-card" key={idx}>
                <span>0{idx + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: RELEVANT LOCAL SERVICE INFORMATION & CHALLENGES */}
      <section className="section warm">
        <div className="container">
          <SectionTitle
            eyebrow={`Local Climate Factors`}
            title={content.localInfoTitle}
            text={content.localInfoText}
          />
          <div className="values-grid">
            {content.challengesList.map((item, idx) => (
              <div key={idx}>
                <ShieldCheck />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ORIGINAL FAQS */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={`Frequently Asked Questions`}
            title={`Common ${content.service.name} Questions in ${content.location.name}`}
            text={`Got questions about HVAC repair or service in ${content.location.name}? Here are clear answers to what local homeowners ask most.`}
          />
          <div className="faq-list">
            {content.faqs.map((faq, idx) => (
              <details key={idx}>
                <summary>
                  {faq.q}
                  <ChevronDown />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RELEVANT LINKS TO OTHER SERVICES AND LOCATION PAGES */}
      <section className="section warm">
        <div className="container">
          <SectionTitle
            eyebrow="Explore More Local HVAC Services"
            title={`Other HVAC Services in ${content.location.name}, FL`}
            text={`Need additional cooling, heating, or air quality services in ${content.location.name}? Browse our complete range of local services.`}
          />
          <div className="related-links-grid">
            {Object.keys(SERVICES)
              .filter(sKey => sKey !== sSlug)
              .map(sKey => {
                const otherSrv = SERVICES[sKey];
                const linkUrl = `/${sKey}-${area}`;
                return (
                  <Link key={sKey} href={linkUrl} className="related-link-card">
                    <span>
                      {otherSrv.name} in {content.location.name}
                    </span>
                    <ArrowUpRight size={14} />
                  </Link>
                );
              })}
          </div>

          <div style={{ marginTop: "45px" }}>
            <SectionTitle
              eyebrow="Nearby Service Areas"
              title={`${content.service.name} in Nearby Marion County Communities`}
              text={`AHS Heating & Air provides fast ${content.service.name.toLowerCase()} across all surrounding Ocala communities.`}
            />
            <div className="related-links-grid">
              {Object.keys(LOCATIONS)
                .filter(aKey => aKey !== area)
                .map(aKey => {
                  const otherLoc = LOCATIONS[aKey];
                  const linkUrl = `/${sSlug}-${aKey}`;
                  return (
                    <Link key={aKey} href={linkUrl} className="related-link-card">
                      <span>
                        {content.service.name} in {otherLoc.name}
                      </span>
                      <ArrowUpRight size={14} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready for Expert ${content.service.name} in ${content.location.name}?`}
        text={`Call AHS Heating & Air today at (352) 847-1377 for prompt, reliable service in ${content.location.name}, FL.`}
      />
    </>
  );
}
function About() {
  setMeta(
    "About AHS, LLC. | Ocala Heating Contractor",
    "Learn about AHS, LLC., a local heating and HVAC contractor serving Ocala, Florida and nearby communities."
  );
  return (
    <>
      <PageHero
        eyebrow="About AHS, LLC."
        title="Local comfort. Thoughtful service."
        text="AHS, LLC. is an Ocala HVAC contractor serving residential and commercial customers. The company is licensed (CAC1817865), insured, bonded, and backed by more than 28 years of cooling and heating experience."
        image={technician}
      />
      <section className="section">
        <div className="container narrow">
          <SectionTitle
            eyebrow="Our approach"
            title="The service experience should feel as comfortable as the result."
            text="We believe homeowners deserve a clear conversation about their system and a practical path forward. That means listening first, explaining what we see, and keeping the focus on the comfort of your home."
          />
          <div className="values-grid">
            <div>
              <ShieldCheck />
              <h3>Trust through clarity</h3>
              <p>
                Good service means understanding what is happening and why a
                recommendation makes sense.
              </p>
            </div>
            <div>
              <Wrench />
              <h3>Careful workmanship</h3>
              <p>
                Heating and HVAC systems are part of everyday life. We approach
                them with attention and respect for your space.
              </p>
            </div>
            <div>
              <HomeIcon />
              <h3>Home-first thinking</h3>
              <p>
                Every home has different comfort goals. The right next step
                should fit the people and space inside it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ImageShowcase
        eyebrow="The people behind the service"
        title="Careful work in every room"
        text="AHS, LLC. brings a hands-on approach to the equipment that keeps Ocala homes and businesses comfortable."
        items={[
          [
            "/images/ahs-service-technician.webp",
            "HVAC technician working in a clean utility room",
            "Hands-on HVAC service",
          ],
        ]}
      />
      <CtaBand
        title="Talk with AHS, LLC."
        text="Serving Ocala and nearby communities with licensed HVAC service."
      />
    </>
  );
}
function Contact() {
  setMeta(
    "Contact AHS, LLC. | Heating Contractor in Ocala, FL",
    "Contact AHS, LLC. for heating, furnace, AC, and HVAC service in Ocala, Florida. Call (352) 847-1377."
  );
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get your home comfortable again."
        text="Contact AHS, LLC. for repair, replacement, maintenance, and HVAC service information in the Ocala area."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow="Call AHS, LLC."
              title="Contact information for AHS, LLC."
              text="AHS, LLC. provides repair, replacement, maintenance, and comfort services for residential and commercial systems."
            />
            <CallButton>Call {PHONE}</CallButton>
            <div className="contact-details">
              <div>
                <MapPin />
                <span>
                  <strong>Location</strong>
                  {ADDRESS}
                </span>
              </div>
              <div>
                <Phone />
                <span>
                  <strong>Phone</strong>
                  <a href={TEL}>{PHONE}</a>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  <strong>Hours shown on Google</strong>7:00 AM–7:00 PM
                </span>
              </div>
              <div>
                <ShieldCheck />
                <span>
                  <strong>State License</strong>
                  Florida Certified HVAC Contractor #CAC1817865
                </span>
              </div>
            </div>
          </div>
          <div className="map-card">
            <iframe
              title="AHS, LLC. location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111481.93876646785!2d-82.15693499999999!3d29.170253450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7cd7c19fdfd83%3A0x68110136ca4a6158!2sAHS%2C%20LLC.!5e0!3m2!1sen!2sin!4v1790574617132!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <a href={MAP} target="_blank" rel="noreferrer" className="map-link">
              Open in Google Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
      <ImageShowcase
        eyebrow="Simple control"
        title="Comfort at your fingertips"
        text="AHS, LLC. can help with thermostat questions, system comfort, and the equipment behind the temperature you set."
        items={[
          [
            "/images/ahs-thermostat.webp",
            "Hand adjusting a modern smart thermostat",
            "Thermostat service",
          ],
        ]}
      />
      <CtaBand
        title="Prefer to call?"
        text="The fastest way to reach AHS, LLC. is by phone."
      />
    </>
  );
}
function FAQ() {
  setMeta(
    "HVAC FAQs | AHS Heating & Air Ocala",
    "Answers to common questions about heating, AC repair, and HVAC service from AHS Heating & Air in Ocala, FL."
  );
  const qs: [string, React.ReactNode][] = [
    [
      "What areas does AHS Heating & Air serve?",
      <span>
        AHS Heating & Air is based in Ocala and serves nearby communities across
        Marion County, including{" "}
        <Link href="/ac-repair-belleview" className="text-link">
          Belleview
        </Link>
        ,{" "}
        <Link href="/ac-repair-silver-springs-shores" className="text-link">
          Silver Springs Shores
        </Link>
        ,{" "}
        <Link href="/heat-pump-service-the-villages" className="text-link">
          The Villages
        </Link>
        ,{" "}
        <Link href="/hvac-repair-summerfield" className="text-link">
          Summerfield
        </Link>
        ,{" "}
        <Link href="/ac-repair-marion-oaks" className="text-link">
          Marion Oaks
        </Link>
        , and{" "}
        <Link href="/furnace-repair-dunnellon" className="text-link">
          Dunnellon
        </Link>
        . Explore our full{" "}
        <Link href="/service-areas" className="text-link">
          Service Areas
        </Link>{" "}
        directory for localized details.
      </span>,
    ],
    [
      "What should I do if my heater or AC stops working?",
      <span>
        Start by checking whether the thermostat is set correctly and whether
        breakers have tripped. If your system blows warm air or will not start,
        explore our{" "}
        <Link href="/ac-repair-ocala" className="text-link">
          AC Repair
        </Link>
        ,{" "}
        <Link href="/heating-repair-ocala" className="text-link">
          Heating Repair
        </Link>
        , or{" "}
        <Link href="/furnace-repair-ocala" className="text-link">
          Furnace Repair
        </Link>{" "}
        services, or call (352) 847-1377 for prompt diagnostic help.
      </span>,
    ],
    [
      "Do you handle both heating and cooling?",
      <span>
        Yes! AHS Heating & Air offers comprehensive cooling and heating
        solutions, including{" "}
        <Link href="/ac-installation-ocala" className="text-link">
          AC Installation
        </Link>
        ,{" "}
        <Link href="/heat-pump-service-ocala" className="text-link">
          Heat Pump Service
        </Link>
        , and seasonal{" "}
        <Link href="/hvac-maintenance-ocala" className="text-link">
          HVAC Maintenance
        </Link>
        .
      </span>,
    ],
    [
      "Can you help with a thermostat or indoor air quality concern?",
      <span>
        Yes! Learn more about our smart{" "}
        <Link href="/thermostat-service-ocala" className="text-link">
          Thermostat Service
        </Link>{" "}
        and whole-home{" "}
        <Link href="/indoor-air-quality-ocala" className="text-link">
          Indoor Air Quality
        </Link>{" "}
        solutions for allergen and humidity control.
      </span>,
    ],
    [
      "How do I request service?",
      <span>
        Call (352) 847-1377 or visit our{" "}
        <Link href="/contact" className="text-link">
          Contact page
        </Link>
        . A team member can help you identify the right starting point for your
        home comfort concern.
      </span>,
    ],
  ];
  return (
    <>
      <PageHero
        eyebrow="Helpful answers"
        title="HVAC questions, answered simply."
        text="A few useful starting points for homeowners in Ocala and nearby communities."
      />
      <section className="section">
        <div className="container faq-list">
          {qs.map(([q, a], idx) => (
            <details key={idx}>
              <summary>
                {q}
                <ChevronDown />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand
        title="Still have a question?"
        text="Call AHS Heating & Air at (352) 847-1377 to talk with our HVAC team."
      />
    </>
  );
}
function ServiceAreas() {
  setMeta(
    "HVAC Service Areas | AHS, LLC. Ocala",
    "Explore AHS, LLC. heating and HVAC service areas around Ocala, Florida."
  );
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title="Heating and HVAC service near Ocala"
        text="AHS, LLC. is based in Ocala and serves nearby communities throughout the area."
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Local HVAC coverage"
            title="Comfort service for Ocala and nearby communities"
            text="AHS, LLC. helps homeowners across the Ocala area with heating repair, furnace service, AC repair, HVAC maintenance, heat pumps, thermostats, and indoor air quality. Each page below focuses on one primary service and one community so you can quickly find the most relevant information."
          />
          <div className="area-grid">
            {areas.map((a, i) => (
              <a href={getAreaSlug(a)} className="area-card" key={a}>
                <span>0{i + 1}</span>
                <MapPin />
                <h2>{areaNames[a]}</h2>
                <p>{areaServices[i]} focused page</p>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </section>
      <ImageShowcase
        eyebrow="Our Ocala home base"
        title="Local service across the area"
        text="AHS, LLC. serves Ocala and nearby communities with practical heating and HVAC support."
        items={[
          [
            "/images/ahs-ocala-home.webp",
            "Florida home exterior in Ocala at sunrise",
            "Ocala-area homes",
          ],
        ]}
      />
      <section className="warm section">
        <div className="container split-grid">
          <div>
            <SectionTitle
              eyebrow="Service information"
              title="Residential and commercial HVAC service around Ocala."
              text="The right HVAC service depends on what your system is doing, how long the issue has been happening, and what comfort goal you have for your home. Call AHS, LLC. and describe the symptoms—we will help you identify the right next step."
            />
            <CallButton>Call Now</CallButton>
          </div>
          <div className="side-card">
            <MapPin className="aside-pin" />
            <h3>Serving the Ocala area</h3>
            <p>
              Based at {ADDRESS}, AHS, LLC. is positioned to help homeowners in
              Ocala and nearby communities.
            </p>
            <a className="side-link" href="/contact">
              View contact details <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
      <CtaBand
        title="Service area information."
        text="Call AHS, LLC. for service-area information."
      />
    </>
  );
}
function Reviews() {
  setMeta(
    "Customer Reviews | AHS, LLC. Ocala",
    "Read customer-provided Google review excerpts about AHS, LLC. heating and HVAC service in Ocala, Florida."
  );
  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="Real words from AHS customers."
        text="Read customer-provided Google review excerpts about heating, cooling, repairs, installations, and service from AHS, LLC."
      />
      <section className="section reviews-page">
        <div className="container">
          <div className="reviews-intro">
            <div>
              <div className="rating">
                <Star fill="currentColor" />
                <strong>5.0</strong>
                <span>{allReviews.length} attached Google reviews</span>
              </div>
              <SectionTitle
                eyebrow="From the attached Google review text"
                title="Service stories from Ocala-area homeowners"
                text="These excerpts are reproduced from the customer review text provided for this website. Names are shown as they appeared in the source."
              />
            </div>
            <CallButton>Call AHS, LLC.</CallButton>
          </div>
          <div className="reviews-grid">
            {allReviews.map(([author, quote]) => (
              <article className="reviews-page-card" key={author}>
                <div className="review-card-top">
                  <span className="stars">★★★★★</span>
                  <span className="review-source">Google review</span>
                </div>
                <blockquote>“{quote}”</blockquote>
                <div className="review-author">{author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="AHS, LLC. heating and HVAC services."
        text="Serving Ocala and nearby communities with licensed HVAC service."
      />
    </>
  );
}
function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow eyebrow-copper">AHS, LLC. · Ocala, FL</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <CallButton>Call Now</CallButton>
      </div>
    </section>
  );
}
function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="That page moved."
        text="Find your way back to AHS, LLC. services or call the team directly."
      />
      <section className="section">
        <div className="container">
          <a href="/" className="call-btn">
            Back to home
          </a>
        </div>
      </section>
    </>
  );
}
function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        {services.map(([slug]) => (
          <Route
            key={slug}
            path={`/${slug}`}
            component={() => <Detail slug={slug} />}
          />
        ))}
        {areas.flatMap(a =>
          services.map(([slug, sName]) => (
            <Route
              key={`${slug.replace("-ocala", "")}-${a}`}
              path={`/${slug.replace("-ocala", "")}-${a}`}
              component={() => (
                <Area
                  area={a}
                  serviceName={sName}
                  serviceSlug={slug.replace("-ocala", "")}
                />
              )}
            />
          ))
        )}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}
export default function App() {
  return <Router />;
}
