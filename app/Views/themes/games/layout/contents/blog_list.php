<!-- START NEWS & BLOG -->
<section class="container-fluid pt__42px pb__72px">
                <div class="container">
                    <div class="row g-3 mb__32px">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <div style="width: 32px;height: 2px;" class="event-bg-gray-light mr__16px"></div>
                                <h3 class="text-uppercase mb-0 fs__20px fs__30lpx event-fw__600 event-text-gray-light">NEWS & BLOG</h3>
                            </div>
                        </div>
                        <div class="col-md-6  text-md-end">
                            <a style="border-bottom: 2px solid;" class="pb__4px text-uppercase event-fw__600" href="./news.html">Lihat Semua</a>
                        </div>
                    </div>
                    <div class="row g-4">
                        {BLOG_LIST}
                            <div class="col-lg-4 col-md-6 mb-5 mb-lg-3">
                                <div class="card border-0 border-0 bg-transparent with-link h-100">
                                    <a class="mb__16px" href="{blog_link}">
                                        <figure class="mb-0">
                                            <img src="{blog_image}" class="img-fluid w-100" alt="">
                                        </figure>
                                    </a>
                                    <div class="d-flex mb__4px">
                                        <a href="{blog_link_categories}">Game Mobile</a>
                                    </div>
                                    <h3 class="text-white mb__16px fs__18px" style="line-height: 1;">
                                        <a href="{blog_link}" class="text-white event-fw__700">
                                        {blog_title}
                                        </a>
                                    </h3>
                                    <div class="d-flex mb__16px mt-auto">
                                        <div class="event-text-gray">01/01/2021</div>
                                    </div>
                                    <p class="mb__32px event-text-gray">{blog_summary}</p>
                                    <a class="event-fw__600" href="{blog_link}">
                                        <span class="mr__32px">BACA SELENGKAPNYA</span>
                                        <i class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        {/BLOG_LIST} 
                    </div>
                </div>
            </section>
            <!-- END NEWS & BLOG -->