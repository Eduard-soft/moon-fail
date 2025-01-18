import { Metadata } from "next"
import { Home } from "./Home"

export const metadata: Metadata = {
	title: 'Your first workpiece for web project'
}

export default function HomePage() {
	return <Home />
}