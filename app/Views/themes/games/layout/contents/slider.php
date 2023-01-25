<!-- START HOME slider -->
<section class="container-fluid" style="background: linear-gradient(to left,#1a1a1a,#272727)">
                <div class="row">
                    <div class="col-12  py__32px px-0">
                        <div class="swiper-container event-default-swiper js_func-swiper-home">
                            <div class="swiper-wrapper">
                                {SLIDER_LIST}
                                    <div class="swiper-slide">
                                        <a href="{slider_link}">
                                            <img src="{slider_image}" class="img-fluid w-100" style="max-height: 500px!important" alt="{slider_title}">
                                        </a>
                                    </div>
                                {/SLIDER_LIST}
                            </div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-navigation-button is-left js_func-swiper-home-prev">
                                <i class="fa fa-chevron-left"></i>
                            </div>
                            <div class="swiper-navigation-button is-right js_func-swiper-home-next">
                                <i class="fa fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END HOME slider -->