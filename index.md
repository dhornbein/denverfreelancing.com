---
title: home
navbar:
  dark: true
---

<!-- Above the fold -->
<div class="view"
     style="background-image: url('assets/img/better-together-20181011-post_1-bw_1.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center top;">
  <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
    <div class="text-center white-text mx-5 wow fadeIn">
      <h1 class="h1 mb-4">
        <strong><u>Front Range Freelancers</u></strong>
      </h1>
      <h2 class="font-italic">
        <strong>Are Better Together</strong>
      </h2>
      <h5 class="my-4 d-none d-md-block">
        <strong>
          If you are a freelancer in the Front Range area &mdash; or curious
           about how cool it will be to strike out on your own &mdash;
           get involved with us!
        </strong>
      </h5>
      <a class="btn btn-white btn-lg mt-3" href="{{ '/vision' | relative_url }}">
        <i class="fas fa-eye mr-3 d-none d-md-inline"></i>
        Read Our Vision
        <i class="fas fa-eye ml-3 d-none d-md-inline"></i>
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
    <section>
      <h2 class="display-4 text-center font-weight-bold my-5">
        <i class="fas fa-calendar-alt mb-3"></i>
        <br>
        Events
      </h2>
      <div class="row wow fadeIn">
        <div class="col-md-6">
          <h2 class=" mb-3">
            February Working Meetup
          </h2>
          <p class="lead">
            <strong>When:</strong> Tuesday February 26th
          </p>
          <p class="lead">
            <strong>Location:</strong> TBD
          </p>
          <p>
            Come work on co-creating Better Together.
            Share some food, fun, and learning.
          </p>
          <p class="lead">
            If you want to join us, send an email!
          </p>
          <p class="">
            <button type="button" class="btn btn-warning">
              <a class="black-text"
                 href="mailto:{{ site.email }}" role="button">
                Email Us!</a>
            </button>
          </p>
        </div><!-- .col-*-->
        <div class="col-md-6">
          <h2 class=" mb-3">
            March Networking and Community Building!
          </h2>
          <p class="lead">
            <strong>When:</strong> Tuesday March 26th
          </p>
          <p class="lead">
            <strong>Location:</strong>
            <a href="https://www.galvanize.com/denver-golden-triangle/campus">
              Galvanize Golden Triangle
            </a>
            1062 Delaware St. Denver CO 80204
          </p>
          <p>
            We will gather at Galvanize, enjoy some tasty (free) food, connect
             with each other, and foster a supportive and creative environment.
          </p>
          <p class="lead">
            Use one of the buttons below to RSVP!
          </p>
          <p class="">
            <button type="button" class="btn btn-danger">
              <a class="white-text" role="button" target="_blank"
                 href="https://www.meetup.com/Colorado-Co-ops-Study-Circle/events/258363973/">
                <i class="fab fa-meetup"></i>
                RSVP on Meetup
              </a>
            </button>
            <button type="button" class="btn btn-primary">
              <a class="white-text" role="button" target="_blank"
                 href="https://www.facebook.com/events/1064508467084854/">
                <i class="fab fa-facebook"></i>
                RSVP on Facebook
              </a>
            </button>
          </p>
        </div><!-- .col-*-->
      </div><!-- .row -->
    </section>

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
