import { Outlet } from 'react-router-dom'


export default function AppShell() {
 
  return (
    <div className='relative h-full overflow-hidden bg-background'>
      {/* <SkipToMain />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      //  ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} */}
      <main
        id='content'
        className={`overflow-x-hidden transition-[margin] md:overflow-y-hidden md:pt-0
          
            h-full`}
      >
        <Outlet />
      </main>
    </div>
  )
}
