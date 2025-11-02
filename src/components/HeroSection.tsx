import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ButtonLink {
	href: string;
	text: string;
	variant?: "default" | "secondary" | "outline";
}

interface HeroSectionProps {
	name: string;
	title: string;
	description: string;
	buttons: ButtonLink[];
	imageSrc: string;
	imageAlt: string;
}

export function HeroSection({
	name,
	title,
	description,
	buttons,
	imageSrc,
	imageAlt,
}: HeroSectionProps) {
	return (
		<section className="container py-24 md:py-32">
			<div className="grid gap-12 lg:grid-cols-2 items-center">
				{/* Image Side */}
				<div className="order-2 lg:order-1">
					<div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="object-cover w-full h-auto"
							loading="eager"
						/>
					</div>
				</div>

				{/* Content Side */}
				<div className="order-1 lg:order-2 space-y-8">
					<div className="space-y-4">
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
							{name}
						</h1>
						<Badge variant="secondary" className="text-sm">
							{title}
						</Badge>
					</div>

					<p className="text-xl text-muted-foreground">
						{description}
					</p>

					<div className="flex flex-wrap gap-4">
						{buttons.map((button, index) => (
							<Button
								key={index}
								variant={button.variant || "default"}
								size="lg"
								asChild
							>
								<a href={button.href}>{button.text}</a>
							</Button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

