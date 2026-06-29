import React from 'react'
import "./Sidebar.css"
import home from "../../assets/home_icon.svg"
import game_icon from "../../assets/game_icon.svg"
import automobiles from "../../assets/automobile.svg"
import sports from "../../assets/sports.svg"
import entertainment from "../../assets/entertainment.svg"
import tech from "../../assets/tech.svg"
import music from "../../assets/music.svg"
import blog from "../../assets/blog.svg"
import news from "../../assets/news.svg"
import user from "../../assets/profile_icon.svg"
import piyush from "../../assets/Piyush.jpg"
import akshit from "../../assets/Akshit.png"
import rahul from "../../assets/Rahul.jpg"
import aman from "../../assets/Aman.jpg"
import anshika from "../../assets/Anshika.png"


const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar==true?"":"small-sidebar" } `}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blog} alt="" />
          <p>Blog</p>
        </div>
        <div className="side-link">
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscription-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={piyush} alt="" />
          <p>Piyush Shah</p>
        </div>
        <div className="side-link">
          <img src={akshit} alt="" />
          <p>Akshit Chandel</p>
        </div>
        <div className="side-link">
          <img src={rahul} alt="" />
          <p>Rahul Lingwal</p>
        </div>
        <div className="side-link">
          <img src={aman} alt="" />
          <p>Aman Negi</p>
        </div>
        <div className="side-link">
          <img src={anshika} alt="" />
          <p>Anshika Rautela</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar