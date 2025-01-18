import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { Admin } from "./Admin";

export const metadata: Metadata = {
	title: "Content administration",
	...NO_INDEX_PAGE
}

export default function AdminPage() {
	return <Admin />
}