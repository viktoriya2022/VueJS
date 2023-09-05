<template>
    <div>
        <footer class="footer center">
        <div class="footer-logo">
            <div class="logo">
                <img class="logo-img" src="../assets/images/Logo.png" alt="logo">
                <h2 class="logo-text">Interno</h2>
            </div>
            <h2 class="footer-text">It is a long established fact that a reader will be distracted lookings.</h2>
            <div class="icons">
                <a href="#">
                    <img class="icon" src="../assets/images/tw.png" alt="">
                </a>
                <a href="#">
                    <img class="icon" src="../assets/images/in.png" alt="">
                </a>
            </div>
        </div>
        <div class="footer-pages">
            <h2 class="footer-title">Pages</h2>
            <a class="footer-text" href="#">Home</a>
            <a class="footer-text" href="#">Project</a>
            <a class="footer-text" href="#">Blog</a>
        </div>
        <div class="footer-none"></div>
        <div class="footer-contacts">
            <h2 class="footer-title">Contacts</h2>
            <h2 class="footer-text">55 East Birchwood Ave. Brooklyn, New York 11201 
                </h2>
            <h2 class="footer-text">contact@interno.com</h2>
            <h2 class="footer-text">(123) 456 - 7890</h2>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterBlock',

    data() {
        return {
            
        };
    },


    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

.footer {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 135px;
    margin-top: 250px;
}

.logo-img {
    width: 34px;
    height: 34px;
}

.logo-text {
    color: #292F36;
    /* font-family: DM Serif Display; */
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;   
}
.footer-title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
}

.footer-text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 300%; /* 66px */
    letter-spacing: 0.22px;
}

.footer-pages, .footer-contacts, .footer-logo {
    display: flex;
    justify-content: start;
    gap: 10px;
    flex-direction: column;
}

.icons {
    display: flex;
    justify-content: start;
    gap: 54px;
    margin-top: 30px;
}

.icon {
    width: 30px;
}
</style>