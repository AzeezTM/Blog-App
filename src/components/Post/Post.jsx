import React from "react";
import "./Post.css";
function Post() {
  return (
    <div className="display-post d-flex justify-content-center">
      <div className="post">
        <img className="posting" src="/advert.jpeg" alt="" />
        <div className="postinfo">
          <div className="postcats">
            <span className="postcats text-info">Politics</span>
            {/* <span className="postcats">Nature</span> */}
          </div>
          <span className="posttitle fw-bold">
            Lorem ipsum dolor sit amet consectetur
          </span>
          <span className="posted">1 hour ago</span>
          <p className="postdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolore, ea optio, repellendus eius explicabo iusto adipisci nesciunt
            possimus ipsa temporibus nihil, at ab voluptate assumenda
            doloremque? Ducimus, eius! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur dolore, ea optio, repellendus eius
            explicabo iusto adipisci nesciunt possimus ipsa temporibus nihil, at
            ab voluptate assumenda doloremque? Ducimus, eius! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur dolore, ea optio,
            repellendus eius explicabo iusto adipisci nesciunt possimus ipsa
            temporibus nihil, at ab voluptate assumenda doloremque? Ducimus,
            eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur dolore, ea optio, repellendus eius explicabo iusto
            adipisci nesciunt possimus ipsa temporibus nihil, at ab voluptate
            assumenda doloremque? Ducimus, eius!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
