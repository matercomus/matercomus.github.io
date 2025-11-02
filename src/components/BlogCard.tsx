import { Card } from "@/components/ui/card";

interface BlogCardProps {
	href: string;
	title: string;
	pubDate: Date;
	heroImage?: string;
	featured?: boolean;
}

export function BlogCard({ href, title, pubDate, heroImage, featured = false }: BlogCardProps) {
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(pubDate);

	return (
		<a href={href} className="block group">
			<Card className="overflow-hidden transition-all hover:shadow-lg">
				{heroImage && (
					<div className="overflow-hidden">
						<img 
							src={heroImage} 
							alt=""
							className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
				)}
				<div className="p-6">
					<h4 className={`font-semibold mb-2 group-hover:text-primary transition-colors ${featured ? 'text-3xl' : 'text-xl'}`}>
						{title}
					</h4>
					<time className="text-sm text-muted-foreground">{formattedDate}</time>
				</div>
			</Card>
		</a>
	);
}

