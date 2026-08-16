import Navbar from "@/components/Navbar";
import SideRail from "@/components/SideRail";

/*
 * Chrome for the portfolio itself. The decks under /slides sit outside this
 * group because they take over the viewport and carry their own navigation —
 * and because the nav here links to on-page anchors that only exist on /.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <SideRail />
      <div className="relative z-10">{children}</div>
    </>
  );
}
