import fs from 'fs';
import path from 'path';

const appTsxPath = 'client/src/App.tsx';
let appTsx = fs.readFileSync(appTsxPath, 'utf8');

// 1. Add getAreaSlug
if (!appTsx.includes('function getAreaSlug')) {
  appTsx = appTsx.replace(
    'const allReviews = [',
    `function getAreaSlug(area: string) {
  const service = areaServices[areas.indexOf(area)];
  const slug = services.find(s=>s[1]===service)?.[0] || "hvac-repair-ocala";
  return "/" + slug.replace("-ocala", "-" + area);
}
const allReviews = [`
  );
}

// 2. Replace Header links
appTsx = appTsx.replace(
  /href=\{`\/furnace-repair-\$\{area\}`\}/g,
  `href={getAreaSlug(area)}`
);

// 3. Replace Footer links
appTsx = appTsx.replace(
  /href=\{`\/furnace-repair-\$\{area\}`\}/g,
  `href={getAreaSlug(area)}`
);

// 4. Replace ServiceAreas links
appTsx = appTsx.replace(
  /href=\{`\/furnace-repair-\$\{a\}`\}/g,
  `href={getAreaSlug(a)}`
);

// 5. Replace Area links
appTsx = appTsx.replace(
  /href=\{`\/furnace-repair-\$\{a\}`\}/g,
  `href={getAreaSlug(a)}`
);

// 6. Update Area function signature
appTsx = appTsx.replace(
  'function Area({area}:{area:string}){ const name=areaNames[area]; const service=areaServices[areas.indexOf(area)];',
  'function Area({area, serviceName}:{area:string, serviceName?:string}){ const name=areaNames[area]; const service=serviceName || areaServices[areas.indexOf(area)];'
);

// 7. Update Router routes
appTsx = appTsx.replace(
  '{areas.map(a=><Route key={a} path={`/furnace-repair-${a}`} component={()=> <Area area={a}/>}/>)}',
  '{areas.flatMap(a=>services.map(([slug, sName])=><Route key={`${slug.replace("-ocala","")}-${a}`} path={`/${slug.replace("-ocala","")}-${a}`} component={()=> <Area area={a} serviceName={sName}/>}/>))}'
);

fs.writeFileSync(appTsxPath, appTsx);
console.log('App.tsx updated');

// Generate sitemap
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

const areas = ["silver-springs-shores", "belleview", "summerfield", "the-villages", "marion-oaks", "dunnellon", "anthony", "reddick", "citra", "ocala-estates"];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const urls = [
  "",
  "/services",
  "/service-areas",
  "/reviews",
  "/about",
  "/contact",
  "/faq"
];

services.forEach(s => urls.push("/" + s));

areas.forEach(a => {
  services.forEach(s => {
    urls.push("/" + s.replace("-ocala", "-" + a));
  });
});

urls.forEach(u => {
  sitemap += `  <url><loc>https://ahsheatingair.com${u}</loc></url>\n`;
});
sitemap += `</urlset>\n`;

fs.writeFileSync('client/public/sitemap.xml', sitemap);
console.log('sitemap.xml updated, total pages:', urls.length);
