import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeaderProps {
	currentPath: string;
}

// Get base URL - works at build time in Astro, falls back to runtime detection
const getBaseUrl = () => {
	// Try to get from Astro's build-time env
	if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
		return import.meta.env.BASE_URL;
	}
	// Fallback: detect from current pathname
	if (typeof window !== 'undefined') {
		const path = window.location.pathname;
		// If path starts with /personal-site/, use that as base
		if (path.startsWith('/personal-site/')) {
			return '/personal-site/';
		}
	}
	return '/';
};

const navLinks = (baseUrl: string) => [
	{ href: baseUrl === '/' ? '/' : baseUrl.replace(/\/$/, ''), label: "About" },
	{ href: `${baseUrl}projects`, label: "Projects" },
	{ href: `${baseUrl}blog`, label: "Blog" },
	{ href: `${baseUrl}cv`, label: "Resume" },
];

export function Header({ currentPath }: HeaderProps) {
	const [baseUrl, setBaseUrl] = useState(getBaseUrl());
	const links = navLinks(baseUrl);

	// Ensure base URL is set correctly on mount
	useEffect(() => {
		const detectedBase = getBaseUrl();
		if (detectedBase !== baseUrl) {
			setBaseUrl(detectedBase);
		}
	}, []);

	const isActive = (href: string) => {
		const normalizedHref = href === baseUrl || href === baseUrl.replace(/\/$/, '') || (baseUrl === '/' && href === '/');
		if (normalizedHref) return currentPath === baseUrl || currentPath === baseUrl.replace(/\/$/, '') || (baseUrl === '/' && currentPath === '/');
		return currentPath.startsWith(href);
	};

	const homeHref = baseUrl === '/' ? '/' : baseUrl.replace(/\/$/, '');

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden" style={{ display: 'block' }}>
			<style>{`
				@media print {
					header, header *, nav, nav * {
						display: none !important;
						visibility: hidden !important;
					}
				}
			`}</style>
			<div className="container flex h-16 items-center justify-between">
				<Button asChild variant="link" size="lg" className="font-bold text-lg px-4 mr-4">
					<a href={homeHref}>Mateusz Kędzia</a>
				</Button>
				
				<nav className="flex items-center gap-1">
					{links.map((link) => (
						<Button
							key={link.href}
							variant={isActive(link.href) ? "default" : "ghost"}
							size="sm"
							asChild
							className={isActive(link.href) ? "text-primary-foreground" : ""}
						>
							<a href={link.href} className={isActive(link.href) ? "text-primary-foreground" : ""}>{link.label}</a>
						</Button>
					))}
				</nav>
			</div>
		</header>
	);
}

