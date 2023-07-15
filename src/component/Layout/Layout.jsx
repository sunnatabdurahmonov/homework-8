import { RightSidebar } from "../RightSidebar"
import { Sidebar } from "../sidebar"
import '../Layout/layout.scss'

export const Layout  = ({children}) => {
    return (
        <div className="layout">
            <Sidebar/>
                {children}
            <div>
            <RightSidebar/>
            </div>
        </div>
    )
}