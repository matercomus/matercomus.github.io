import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface PostCardProps {
	href: string;
	title: string;
	description: string;
	pubDate: Date;
}

export function PostCard({ href, title, description, pubDate }: PostCardProps) {
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(pubDate);

	return (
		<a href={href} className="block group">
			<Card className="transition-colors hover:bg-accent">
				<CardHeader>
					<CardTitle className="group-hover:text-primary transition-colors">
						{title}
					</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					<time className="text-sm text-muted-foreground">{formattedDate}</time>
				</CardContent>
			</Card>
		</a>
	);
}

