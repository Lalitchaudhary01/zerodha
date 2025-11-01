import { Header } from "@/components/layout/Header";
import { Watchlist } from "@/components/dashboard/Watchlist";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-60px)]">
        <Watchlist />
        {children}
      </div>
    </div>
  );
}
