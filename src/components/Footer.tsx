import { Separator } from "@/components/ui/separator";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-auto w-full print:hidden" style={{ display: 'block' }}>
			<style>{`
				@media print {
					footer, footer * {
						display: none !important;
						visibility: hidden !important;
					}
				}
			`}</style>
			<div className="w-full py-8 px-4">
				<div className="container mx-auto">
					<Separator className="mb-4" />
					<div className="flex justify-center">
						<p className="text-sm text-muted-foreground text-center">
							© {currentYear} Mateusz Kędzia
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

