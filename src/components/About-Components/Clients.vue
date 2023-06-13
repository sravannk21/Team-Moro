<template>
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="content-left">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/1.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/2.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/3.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/4.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/5.png" class="img-fluid" alt="">
                        </div><div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/6.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/7.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-3 p-3 border border-top-0 border-bottom-0 text-center">
                            <img src="@/assets/img/clients/8.png" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 my-auto">
            <div class="content-right">
                <h4 class="mt-3">Our Clients</h4>
                <div class="client-description mt-4">
                    <Paragraph>
                        We've worked with some really amazing clients for whom we've completed everything from branding to extensive digital marketing campaigns.
                    </Paragraph>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped lang="scss">
</style>

<script>
import Paragraph from '../Typography/Paragraph.vue';
export default {
    name:"clientsMoro",
    components: {
       Paragraph
    }
}
</script>