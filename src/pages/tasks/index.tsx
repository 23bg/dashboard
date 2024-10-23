import { Layout } from "@/components/custom/layout";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";
import MainNav from "@/components/mainNav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Tasks() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header className='border-b dark:border-zinc-800 border-zinc-200 shadow-2xl dark:shadow-black shadow-zinc-50 bg-blend-color-burn fixed w-full dark:bg-zinc-950 h-14'>
      <MainNav/>
      </Layout.Header> 

      <Layout.Body className="lg:mx-32 md:mx-14 mt-16 overflow-clip">
      <ScrollArea className="w-full h-full overflow-y-auto">
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <div className="-mx-4 flex-1  px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable data={tasks} columns={columns} />
        </div>
      </ScrollArea>
      </Layout.Body>

        helllo
    </Layout>
  );
}
