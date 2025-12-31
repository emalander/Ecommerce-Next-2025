import { Footer, Sidebar } from "@/src/components";
import TopMenu from "@/src/components/ui/top-menu/TopMenu";

export default function ShopLayout({children}: {
    children:React.ReactNode;
}){
    return (
    <main className="min-h-screen bg-jira-background-clean ">
        <TopMenu/>
        <Sidebar/>
        <div className="px-0 sm:px-10">
          {children}
        </div>
        <Footer/>
    </main>
  )
}
