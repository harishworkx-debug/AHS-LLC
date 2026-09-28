import fs from 'fs';

const p = 'client/src/App.tsx';
let code = fs.readFileSync(p, 'utf8');

// Ensure Link is imported from wouter
if (!code.includes('Link,')) {
    code = code.replace(/import { Route, Switch, useLocation } from "wouter";/, 'import { Route, Switch, useLocation, Link } from "wouter";');
}

// Regex to replace <a href="...">...</a> with <Link href="...">...</Link>
// We ONLY want to replace internal links, which means href starts with "/" or "#" or "getAreaSlug("
// We should NOT replace href={TEL} or href={MAP}

code = code.replace(/<a\s+([^>]*href=\{?['"`/](?![a-z]+:)[^>]*>.*?)<\/a>/g, (match, p1) => {
    // Check if it's TEL or MAP
    if (match.includes('href={TEL}') || match.includes('href={MAP}')) {
        return match;
    }
    // Also ignore sticky-call which uses TEL
    if (match.includes('className="sticky-call"')) return match;
    // Replace <a with <Link and </a> with </Link>
    return `<Link ${p1}</Link>`;
});

// There are also cases like <a href={getAreaSlug(a)}
code = code.replace(/<a\s+([^>]*href=\{getAreaSlug[^>]*>.*?)<\/a>/g, (match, p1) => {
    return `<Link ${p1}</Link>`;
});

fs.writeFileSync(p, code);
console.log('Links replaced in App.tsx');
