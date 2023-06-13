<template>
<section class="contact">
  <div>
    <MainHeading class="title">Contact Us</MainHeading>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6 my-auto" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
        <div class="contact-left">
          <h3 class="contact-caption">To make requests for further information</h3>
          <Paragraph className="contact-desc">
            We just need a couple of hours!  No more than 2 working days since receiving your issue ticket.
          </Paragraph>
        </div>
      </div>
      <div class="col-md-6" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
        <div class="contact-right my-4">
          <form action="#" class="contact-form">
            <div class="form-box p-3">
              <input type="text" placeholder="Name" class="w-100 h-100 p-2 bg-light border-0 fs-6">
            </div>
            <div class="col-md-6 form-box email-and-mobile p-3 d-md-inline-block">
              <span>
                <input type="text" placeholder="Email" class="bg-light border-0 w-100 h-100 p-2 fs-6">
              </span>
            </div>
            <div class="col-md-6 form-box email-and-mobile p-3 d-md-inline-block">
              <span>
                <input type="text" placeholder="Mobile" class="bg-light border-0 w-100 h-100 p-2 fs-6">
              </span>
            </div>
            <div class="msg-box p-3">
              <textarea placeholder="Message" class="border-0 bg-light w-100 h-100 p-2 fs-6"></textarea>
            </div>
            <div class="button p-3 d-flex justify-content-end">
              <CommonButton url="#" button="button">Send Message</CommonButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container bg-light">
    <div class="row text-center">
      <div class="col-md-4 p-2 border">
        <div class="phone">
          <i class="bi bi-telephone fs-3 p-2 text-danger mb-3"></i>
        </div>
        <div class="phone-numbers">
          <Paragraph>+91 96051 64671</Paragraph>
        </div>
      </div>
      <div class="col-md-4 p-2 border">
        <div class="email">
          <i class="bi bi-envelope fs-3 p-2 text-danger mb-3"></i>
        </div>
        <div class="email-id">
          <Paragraph>hi@teammoro.com</Paragraph>
        </div>
      </div>
      <div class="col-md-4 pt-2 border">
        <div class="address-icon">
          <i class="bi bi-geo-alt p-2 text-danger mb-3 fs-3"></i>
        </div>
        <div class="address">
          <Paragraph>Moro, First Floor, Manatti Complex Manna, Taliparamba, 670141</Paragraph>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.contact {
  margin: 4rem 0;
}
.form-box {
  height: 6rem;
}
.msg-box {
  height: 15rem;
}
.title{
  margin-bottom: 4rem;
}
.contact-caption {
  position: relative;
  margin-left: 2rem;
  padding-top: 1rem;
  &:before {
    position: absolute;
    top: 0;
    left: -2rem;
    content: '';
    display: block;
    width: 0.3rem;
    height: 7rem;
    background-color: red;
    border-radius: 2px;
  }
}
.contact-desc{
  width: 60%;
  margin: 1rem 0 0 2rem;
}

</style>

<script>
import CommonButton from '../CommonButton.vue';
import MainHeading from '../Typography/MainHeading.vue';
import Paragraph from '../Typography/Paragraph.vue';
export default {
    name: 'contactMoro',
    components: {
    MainHeading,
    CommonButton,
    Paragraph
}
}
</script>