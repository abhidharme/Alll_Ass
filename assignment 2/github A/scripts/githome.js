
function navbar(){
    return `<div id="navbar">

    <div id="logo">
      <a href="githome.html">  <img src="https://avatars0.githubusercontent.com/u/26377421?s=400&v=4"/></a> 
    </div>
  
    <div id="search">
     <input type="text" placeholder="Search Github" id="searchgit">
    </div>

    <div id="options">
        <ul type="none" id="list">
          <li>Pull request</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <a href="explore.html">  <li>Explore</li> </a>
        </ul>
    </div>

    <div id="profile">
      <img id="p_img" src="https://th.bing.com/th/id/OIP.V5LxAypoqnJzwa2og8vh3QHaJ4?pid=ImgDet&rs=1">
    </div>

</div>`
}

export default navbar