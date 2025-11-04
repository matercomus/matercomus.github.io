import { Button } from "@/components/ui/button";

interface HeaderProps {
	currentPath: string;
}

const navLinks = [
	{ href: "/", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{ href: "/cv", label: "Resume" },
];

export function Header({ currentPath }: HeaderProps) {
	const isActive = (href: string) => {
		if (href === "/") return currentPath === "/";
		return currentPath.startsWith(href);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<Button asChild variant="link" size="lg" className="font-bold text-lg px-4 mr-4">
					<a href="/">Mateusz Kędzia</a>
				</Button>
				
				<nav className="flex items-center gap-1">
					{navLinks.map((link) => (
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

