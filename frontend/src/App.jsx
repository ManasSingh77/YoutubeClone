import React from "react";
import "./App.css"; // Assuming this is in your src folder or correctly referenced

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img src="/images/menu.png" className="menu-icon" alt="menu" />
          <img src="/images/logo.png" className="logo" alt="logo" />
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search.." />
            <img src="/images/search.png" alt="search" />
          </div>
          <img src="/images/voice-search.png" className="mic-icon" alt="mic" />
        </div>
        <div className="nav-right flex-div">
          <img src="/images/upload.png" alt="upload" />
          <img src="/images/more.png" alt="more" />
          <img src="/images/notification.png" alt="notification" />
          <img src="/images/nilava.jpeg" className="user-icon" alt="user" />
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="shortcut-links">
          <a href="#"><img src="/images/home.png" alt="home" /><p>Home</p></a>
          <a href="#"><img src="/images/explore.png" alt="explore" /><p>Explore</p></a>
          <a href="#"><img src="/images/subscriprion.png" alt="subscription" /><p>Subscription</p></a>
          <hr />
          <a href="#"><img src="/images/library.png" alt="library" /><p>Library</p></a>
          <a href="#"><img src="/images/history.png" alt="history" /><p>History</p></a>
          <a href="#"><img src="/images/playlist.png" alt="playlist" /><p>Playlist</p></a>
          <a href="#"><img src="/images/messages.png" alt="messages" /><p>Messages</p></a>
          <a href="#"><img src="/images/show-more.png" alt="show-more" /><p>Show more</p></a>
          <hr />
        </div>

        <div className="subscribed-list">
          <h3>SUBSCRIPTIONS</h3>
          <a href="#"><img src="/images/Jack.png" alt="Jack" /><p>Jack &bull;</p></a>
          <a href="#"><img src="/images/simon.png" alt="Simon" /><p>Simon</p></a>
          <a href="#"><img src="/images/tom.png" alt="Tom" /><p>Tom &bull;</p></a>
          <a href="#"><img src="/images/megan.png" alt="Megan" /><p>Megan Fox &bull;</p></a>
          <a href="#"><img src="/images/cameron.png" alt="Cameron" /><p>Cameron Green</p></a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="banner">
          <img src="/images/banner.png" alt="banner" />
        </div>

        <div className="list-container">
          {Array.from({ length: 20 }, (_, index) => {
            const id = index + 1;
            const hasPage = [1, 2, 3, 9, 11, 12].includes(id); // pages that have video-#.html
            return (
              <div className="vid-list" key={id}>
                <a href={hasPage ? `video-${id}.html` : "#"}>
                  <img src={`/images/thumbnail${id}.png`} className="thumbnail" alt={`thumbnail-${id}`} />
                </a>
                <div className="flex-div">
                  <img src="/images/nilava.jpeg" alt="profile" />
                  <div className="vid-info">
                    <a href={hasPage ? `video-${id}.html` : "#"}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nobis?
                    </a>
                    <p>Avalin</p>
                    <p>2k Views &bull; 2 days</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* JS Script (if needed) */}
      {/* <script src="side-bar.js"></script> */}
    </div>
  );
};

export default App;