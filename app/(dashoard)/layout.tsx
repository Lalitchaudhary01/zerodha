import { Watchlist } from "@/components/dashboard/Watchlist";
import TopBar from "@/components/layout/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <Watchlist />
        <main className="flex-1 overflow-y-auto bg-white">{children}</main>
      </div>
    </div>
  );
}
