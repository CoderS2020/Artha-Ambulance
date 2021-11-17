/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './blog-style.css'
import Image from "./assets/Landing-Page.jpg";

export default function Blog() {
  return(
    <>
      <div
      class="
        container-fluid container-background d-flex
        align-items-center
        justify-content-center" style={{color: "white"}}>
     <div class="text-center " >
        <h1 class="blog">BLOG</h1>
     </div>
    </div>

    <div class="container-fluid mt-3">
      <div class="row" style={{justifyContent: "space-evenly"}}>
        
      
        
          <div class="card border-0 ">
            <div class="post-prev-img">
              <section class="scroll-container" style={{alignItems: "flex-start",height: "auto"}}>
                <div class="outer" style={{width: "100%"}}>
                    <div class="scroll-element js-scroll fade-in">
                        <div class="inner">
                           <a href="/posts/<%=post._id%>"> <img src={Image} alt="animate" class="animate" style={{height:"260px"}} />                           </a>
                        </div>
                    </div>
                </div>
              </section>
            </div>
            <div class="card-body p-2">
              <h6 class="card-title py-3">
                {/* <a href="/posts/<%=post._id%>"><%=post.title%></a> */}
                Title
              </h6>
              {/* <%=post.name%>  */}
              <p class="post-prev-text pt-3">
                {/* <%=post.content.substring(0, 100)%> */}
                lorem issum aks dasg asdi sydiu sdhdn dnfhd sd jc s nbd ld dh jhdf
              </p>
              <a href="/posts/<%=post._id%>" class="text-link" tabindex="-1">Learn More</a>
            </div>
          </div>
          <div class="card border-0 ">
            <div class="post-prev-img">
              <section class="scroll-container" style={{alignItems: "flex-start",height: "auto"}}>
                <div class="outer" style={{width: "100%"}}>
                    <div class="scroll-element js-scroll fade-in">
                        <div class="inner">
                           <a href="/posts/<%=post._id%>"> <img src={Image} alt="animate" class="animate" style={{height:"260px"}} />                           </a>
                        </div>
                    </div>
                </div>
              </section>
            </div>
            <div class="card-body p-2">
              <h6 class="card-title py-3">
                {/* <a href="/posts/<%=post._id%>"><%=post.title%></a> */}
                Title
              </h6>
              {/* <%=post.name%>  */}
              <p class="post-prev-text pt-3">
                {/* <%=post.content.substring(0, 100)%> */}
                lorem issum aks dasg asdi sydiu sdhdn dnfhd sd jc s nbd ld dh jhdf
              </p>
              <a href="/posts/<%=post._id%>" class="text-link" tabindex="-1">Learn More</a>
            </div>
          </div>
        </div>
        <nav>
          <ul class="pagination  pl-4 pr-3">
            <li class="page-item p-2"><a class="page-link" href=""><i class="fa fa-chevron-left"></i></a></li>
            <li class="page-item p-2"><a class="page-link" href="">1</a></li>
            <li class="page-item p-2"><a class="page-link" href="">2</a></li>
            <li class="page-item p-2"><a class="page-link" href="">3</a></li>
            <li class="page-item p-2"><a class="page-link" href="">...</a></li>
            <li class="page-item p-2"><a class="page-link" href="">9</a></li>
            <li class="page-item p-2"><a class="page-link" href=""> <i class="fa fa-chevron-right"></i></a></li>        
          </ul>
        </nav>
      </div>
    </>
  );
}
