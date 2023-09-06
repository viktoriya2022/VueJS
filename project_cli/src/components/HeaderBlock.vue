<template>
  <header class="header center">
        <a href="#">
            <div class="logo">
            <img class="logo-img" src="../assets/images/Logo.png" alt="logo">
            <h2 class="logo-text">Interno</h2>
        </div>
        </a>
        <div class="menubar">
            <div class="menu">
                <a class="menu-text">Home</a>
                <a class="menu">Project</a>
                <a class="menu">Blog</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderBlock',
  props: {
  }
}
</script>

<style scoped>

.header {
    min-height: 50px;
    /* background: #222222; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 399px;
    margin-top: 50px;
    margin-bottom: 70px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
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

.menubar {
    display: flex;
    justify-content: flex-end;
}
.menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 20px;
    color: #292F36;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 25px */
    }

.menu-text {
    color: #292F36;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 25px */
}

</style>
