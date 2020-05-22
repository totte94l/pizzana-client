<template>
    <!-- Footer -->
    <footer class="page-footer footer font-small d-flex align-items-center pt-4">
        <img class="footer_graf" src="../assets/footer_graf_left.png" alt="">
        <img class="footer_graf" src="../assets/footer_graf_right.png" alt="">
        <div class="container" style="z-index: 500">
            <div class="container-fluid text-center text-md-left" style="z-index: 50">
                <div class="row align-items-center">

                    <div class="col-md-2 mt-md-0 mt-3 align-items-center">
                        <img class="logotype" src="../assets/logotype.png" alt="">
                    </div>

                    <hr class="clearfix w-100 d-md-none pb-3">

                    <div class="col-md-10 mb-md-0 mb-3">
                        <h1>
                            Pizzana
                        </h1>
                        <p>
                            Christoffer Cajanders Examensarbete | EC Frontend-utvecklare 2018
                        </p>
                    </div>
                </div>
            </div>

            <div class="footer-copyright text-center" style="z-index: 500">© 2020 Copyright:
                <a href="#"> Christoffer Cajander</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    footer {
        background-color: #420059;
        color: white;
    }

    .footer_graf {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 10;
    }
</style>
