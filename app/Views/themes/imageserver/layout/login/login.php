<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        {PAGE_TITLE}
    </title>



    <!-- START SEO TAG -->
    <meta name="description" content="1011 Event">
    <!-- FB Opengraph -->
    <meta property="og:title" content="1011 Event">
    <meta property="og:description" content="1011 Event">
    <meta property="og:image" content="http://euro-travel-example.com/thumbnail.jpg">
    <meta property="og:url" content="http://euro-travel-example.com/index.htm">
    <!-- Twitter Card -->
    <meta name="twitter:title" content="1011 Event">
    <meta name="twitter:description" content="1011 Event">
    <meta name="twitter:image" content=" http://euro-travel-example.com/thumbnail.jpg">
    <meta name="twitter:card" content="summary_large_image">

    <!-- JSON LD -->
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "url": "http://website.com",
        "name": "1011 Event",
        "description": "1011 Event"
    }
    </script>
    <!-- END SEO TAG -->


    <!-- START GOOGLE FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet">
    <!-- END GOOGLE FONT -->

    <!-- start CSS ICON -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" />
    <!--  end CSS ICON -->

    <!-- start SELF CSS -->
    <link rel="stylesheet" href="{THEMES_PAGE}/assets/css/style.css">
    <!-- end SELF CSS -->
</head>

<body>
    <main class="event-bg-full event-auth-main" style="background-image: url('{THEMES_PAGE}/assets/img/login-bg.jpg');">
        <div style="position: absolute;top: 32px;left: 32px;z-index: 1;width: 128px;height: auto;z-index: 10;">
            <a href="{SITE_URL}">
                <img src="{THEMES_PAGE}/assets/asset/logo-white.png" class="img-fluid" alt="">
            </a>
        </div>
        <div class="container px-0 py__100px" style="z-index: 2;">
            <div class="col-lg-6 mx-auto">
                <div class="card  px__24px py__32px py__64lpx px__42lpx rounded-0 border-0 event-bg-dark-opacity-70">
                    <h1
                        class="text-white text-uppercase fs__32lpx fs__24px text-center event-fw__600 mb__64lpx mb__32px">
                        Login</h1>
                    <!-- <div class="text-center text-danger mb__32px"> <i class="fa fa-exclamation-triangle mr__8px"></i> Opps... something wrong</div> -->

                    <!--  untuk validasi tambahin class was-validated CONTOH : <form action="./profile.html" method="GET" class="needs-validation mb__42px was-validated" novalidate> -->
                    <form action="./profile.html" method="GET" class="needs-validation mb__42px" novalidate>
                        <div class="form-floating mb-3">
                            <input type="email" class="event-form-control-type1" id="auth-email"
                                placeholder="Masukan Email" autocomplete="email" required>
                            <label for="auth-email" class="form-label event-text-gray mb-3">EMAIL</label>
                            <div class="invalid-feedback">
                                Format Email Salah
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="event-form-control-type1" id="auth-password"
                                placeholder="Masukan Password" autocomplete="current-password" min="3" max="32"
                                required>
                            <label for="auth-password" class="form-label event-text-gray mb-3">PASSWORD</label>
                            <div class="invalid-feedback">
                                Format Password Salah
                            </div>
                        </div>
                        <div class="d-flex mb-5">
                            <a class="event-btn-sosmed-facebook btn-lg flex-grow-1 rounded-0 mr__8px" href=""><i
                                    class="fab fa-facebook"></i></a>
                            <a class="btn btn-lg btn-outline-light flex-grow-1 rounded-0 ml__8px" href="">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" x="0px"
                                    y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                    xml:space="preserve">
                                    <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z" />
                                    <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
                                    <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
                                    <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z" />
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>

                            </a>
                        </div>
                        <div class="mb-3">
                            <a class="event-btn-red text-uppercase event-fw__600 rounded-0 btn-lg w-100" type="submit"
                                href="{SITE_URL}dashboard">SIGN IN</a>
                        </div>
                    </form>

                    <div class="d-flex flex-column align-items-center">
                        <a class="event-text-gray text-uppercase event-fw__600 mb-3" href="{SITE_URL}forgot">Forgot
                            Password
                            ?</a>
                        <a class="event-text-gray text-uppercase event-fw__600" href="{SITE_URL}regist">SIGN UP</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- SCRIPT -->
    <script src="{THEMES_PAGE}/assets/js/manifest.js"></script>
    <script src="{THEMES_PAGE}/assets/js/vendor.js"></script>
    <script src="{THEMES_PAGE}/assets/js/global.js"></script>
    <!-- SCRIPT -->
</body>

</html>