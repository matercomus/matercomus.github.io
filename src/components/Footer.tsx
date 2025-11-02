import { Separator } from "@/components/ui/separator";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto">
			<div className="container py-8">
				<Separator className="mb-4" />
				<div className="flex flex-col items-center">
				<p className="text-sm text-muted-foreground">
					© {currentYear} Mateusz Kędzia
				</p>
				</div>
			</div>
		</footer>
	);
}

