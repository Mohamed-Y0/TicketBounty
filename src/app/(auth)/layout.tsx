import { getAuthOrRedirect } from "@/features/auth/queries/getAuthOrRedirect";

export default async function AuthenticatedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await getAuthOrRedirect();

  return <>{children}</>;
}
