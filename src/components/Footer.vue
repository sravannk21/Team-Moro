<template>
<footer class="section bg-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="">
                        <h6 class="footer-heading text-capitalize text-white">Links</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="">
                        <h6 class="footer-heading text-capitalize text-white">Hire us</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Web development </a></li>
                            <li><a href="">Digital marketing</a></li>
                            <li><a href="">Mobile app</a></li>
                            <li><a href="">Search Engine Optimization</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-2">
                    <div class="">
                        <h6 class="footer-heading text-capitalize text-white">More</h6>
                        <ul class="list-unstyled footer-link mt-4">
                            <li><a href="">Sign Up </a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="">
                        <h6 class="footer-heading text-capitalize text-white">Contact Us</h6>
                        <p class="contact-info mt-4">Contact us if need help withanything</p>
                        <p class="contact-info">+01 123-456-7890</p>
                        <div class="mt-5">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#"><i class="bi bi-facebook footer-social-icon"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="bi bi-twitter footer-social-icon"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="bi bi-instagram footer-social-icon"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="bi bi-linkedin footer-social-icon"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center mt-5">
            <p class="footer-alt mb-0 f-14">2023 © Moro, All Rights Reserved</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.bg-footer {
    background-color: #000;
    padding: 50px 0 30px;
}
.footer-heading {
    letter-spacing: 2px;
}

.footer-link a {
    color: #4f4e4e;
    line-height: 40px;
    font-size: .8rem;
    transition: all 0.5s;
    text-decoration: none;
}

.footer-link a:hover {
    color: #fff;
}

.contact-info {
    color: #4f4e4e;
    font-size: 14px;
}

.footer-social-icon {
    font-size: 15px;
    height: 34px;
    width: 34px;
    line-height: 34px;
    border-radius: 3px;
    text-align: center;
    display: inline-block;
    color: #fff;

    &:hover {
        color: red;
    }
}


.footer-alt {
    color: #acacac;
}

.footer-heading {
    position: relative;
    padding-bottom: 12px;
}

.footer-heading:after {
    content: '';
    width: 25px;
    border-bottom: 1px solid #FFF;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    border-bottom: 1px solid red;
}

</style>

<script>
export default {
    name: 'footerMoro'
}
</script>