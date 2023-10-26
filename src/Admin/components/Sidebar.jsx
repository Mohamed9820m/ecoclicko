import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = ({allCommetns}) => {
  const [noAproveCommetn,setNonAproveCommetn]=useState([])
  useEffect(()=>{
    const filtredCommetn= allCommetns?.filter((el) => el.approved === false)
    setNonAproveCommetn(filtredCommetn)
  },[allCommetns])

  return (
    <div
    style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
  
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Blog</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard/blog" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Blogs</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard/comments" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comments">
                Comments <span style={{borderRadius:'50%',color:'red',height:'20px'}}>{noAproveCommetn?.length}</span>
              </CDBSidebarMenuItem>
            </NavLink>

        
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px"
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
