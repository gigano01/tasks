import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function InstrumentsData() {
	const supabase = await createClient();
	const { data: instruments } = await supabase.from("instruments").select();

	return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}

export default async function Instruments() {
	"use server";
	return (
		<Suspense fallback={<div>Loading instruments...</div>}>
			<InstrumentsData />
		</Suspense>
	);
}