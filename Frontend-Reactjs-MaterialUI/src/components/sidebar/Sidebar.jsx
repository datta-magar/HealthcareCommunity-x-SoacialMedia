import "./sidebar.css"
import {RssFeed, Chat, Group, Bookmark, Help} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarItemListText">Feed</span>
                    </li>   
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarItemListText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarItemListText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarItemListText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarIcon" />
                        <span className="sidebarItemListText">Questions</span>
                    </li> 
                </ul> 
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane doe</span>
                    </li>
                </ul>
            </div> 
        </div>
    )
}
