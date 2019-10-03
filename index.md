---
title: home
layout: home
navbar:
  dark: true
redirect_to: "http://bettertogetherassociation.org"
---

<!-- Above the fold -->
<div class="view"
     style="background-image: url('assets/img/better-together-20181011-post_1-bw_1.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center top;">
  <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
    <div class="text-center white-text mx-5 wow fadeIn">
      <h1 class="h1 mb-4">
        <strong><u>Freelance Business Week is coming!</u></strong>
      </h1>
      <h5 class="my-4 d-none d-md-block">
        <strong>
          Hello Freelancers! Join your fellow freelancers for 5 days with over 50 speakers and 60+ sessions this September 30 - Oct 4th.
        </strong>
      </h5>
      <a class="btn btn-white btn-lg mt-3" href="https://freelancebusinessweek.com/denver/">
        Learn More
      </a>
    </div>
  </div><!-- .mask -->
</div><!-- .view -->

<main>
  <div class="container">
    <section>
      <h2 class="display-4 text-center font-weight-bold my-5">
        <span class="mb-3">👋</span>
        <br>
        Hello!
      </h2>
      <div class="row justify-content-center wow fadeIn">
        <div class="col-md-11 col-lg-10 col-xl-8 px-4">
          <h4>
           We are a budding group of freelancers in the Denver/Frontrange
            area seeking to build a network of mutual support.
           We believe that together we can make freelancing better!
          </h4>
        </div><!-- .col-*-->
      </div><!-- .row -->
    </section>

    <!--Events -->
    <hr class="my-5">
    {% include events.html %}

    <!-- Directory, Resources, and Email List -->
    <hr class="mb-5">
    <section>
      <h2 class="display-4 text-center font-weight-bold my-5">
        <i class="far fa-address-card mx-3 mb-3"></i>
        <i class="fas fa-briefcase mx-3 mb-3"></i>
        <i class="fas fa-envelope-square mx-3 mb-3"></i>
        <br>
        More!
      </h2>
      <div class="row my-5 wow fadeIn">
        <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-between text-center">
          <h2 class=" mb-3">
            <i class="far fa-lg fa-address-card mb-3"></i>
            <br>
            Freelancer Directory
          </h2>
          <p class="lead">
            We are building a Freelancer directory to connect each other to each other.
          </p>
          <p class="">
            <button type="button" class="btn btn-dark-green">
              <a class="white-text" href="{{ '/directory' | relative_url }}" role="button">
                View
              </a>
            </button>
            <button type="button" class="btn btn-purple">
              <a class="white-text" href="{{ '/directory/join.html' | relative_url }}" role="button">
                Join
              </a>
            </button>
          </p>
        </div><!-- .col-* -->
        <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-between text-center">
          <h2 class=" mb-3">
            <i class="fas fa-lg fa-briefcase mb-3"></i>
            <br>
            Freelancer Resources
          </h2>
          <p class="lead">
            Check out these book and website recomendations from fellow freelancers!
          </p>
          <p class="">
            <button type="button" class="btn btn-light-green">
              <a class="black-text" href="{{ '/resources' | relative_url }}" role="button">
                Resources
              </a>
            </button>
          </p>
        </div><!-- .col-* -->
        <div class="col-sm-12 col-lg-4 d-flex flex-column justify-content-between text-center mt-md-4 mt-lg-0">
          <h2 class="text-center mb-3">
            <i class="fas fa-lg fa-envelope-square mb-3"></i>
            <br>
            Join Our Mailing List
          </h2>
          <p class="lead">
            We'll send you the low down on upcoming events!
          </p>
          <p class="">
            <button type="button" class="btn btn-indigo">
              <a class="white-text" href="{{ '/subscribe' | relative_url }}" role="button">
                Subscribe
              </a>
            </button>
          </p>
         </div><!-- .col-*-->
       </div><!-- .row -->
     </section>

     <!-- Hi!  Get in touch! -->
     <hr class="mb-5">
     <section>
       <h2 class="display-4 text-center font-weight-bold my-5">
         <i class="fas fa-lg fa-envelope-square mx-3 mb-3"></i>
         <br>
         👋 Get in Touch!
       </h2>
       <div class="row justify-content-center my-5 wow fadeIn">
         <div class="col-md-12 col-lg-11 col-xl-10">
           <p class="lead text-center">
             We are real people just like you, feel free to reach out.
           </p>
           <p class="text-center">
             <a href="mailto:{{ site.email }}">
               hello@denverfreelancing.com
             </a>
           </p>
           <p class="text-center">
             <button type="button" class="btn btn-lg btn-light-blue">
               <a class="black-text" role="button"
                  href="mailto:{{ site.email }}">
                 <i class="fas fa-envelope"></i>
                 Email us
               </a>
             </button>
           </p>
        </div><!-- .col-* -->
      </div><!-- .row -->
    </section>

  </div><!-- .container -->
</main>
