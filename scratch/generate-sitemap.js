import fs from 'fs';

const services = [
  "heating-repair-ocala",
  "furnace-repair-ocala",
  "furnace-installation-ocala",
  "hvac-repair-ocala",
  "ac-repair-ocala",
  "ac-installation-ocala",
  "heat-pump-service-ocala",
  "hvac-maintenance-ocala",
  "thermostat-service-ocala",
  "indoor-air-quality-ocala"
];

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
  "ocala-estates"
];

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const addUrl = (loc, priority, changefreq = "weekly") => {
  xml += `  <url>\n    <loc>https://ahsheatingair.com${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
};

// Core Pages
addUrl("", "1.0", "daily");
addUrl("/services", "0.9", "weekly");
addUrl("/service-areas", "0.9", "weekly");
addUrl("/reviews", "0.8", "weekly");
addUrl("/about", "0.7", "monthly");
addUrl("/contact", "0.8", "monthly");
addUrl("/faq", "0.8", "weekly");

// Main Ocala Service Pages
services.forEach(s => {
  addUrl("/" + s, "0.85", "weekly");
});

// Service-Location Pages (100 URLs)
areas.forEach(a => {
  services.forEach(s => {
    const slug = "/" + s.replace("-ocala", "-" + a);
    addUrl(slug, "0.80", "weekly");
  });
});

xml += `</urlset>\n`;

fs.writeFileSync('client/public/sitemap.xml', xml);
console.log('Generated sitemap.xml with 117 URLs successfully!');
