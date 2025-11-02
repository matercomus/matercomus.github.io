import { Button } from "@/components/ui/button";

interface HeaderProps {
	currentPath: string;
}

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/cv/index.html", label: "CV" },
	{ href: "/cv/index.zh.html", label: "中文简历" },
	{ href: "/about", label: "About" },
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
						>
							<a href={link.href}>{link.label}</a>
						</Button>
					))}
				</nav>
			</div>
		</header>
	);
}

