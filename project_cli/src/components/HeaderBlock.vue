<template>
  <header class="header center">
        <div class="logo">
            <img class="logo-img" src="../assets/images/Logo.png" alt="logo">
            <h2 class="logo-text">Interno</h2>
        </div>
        <div class="menubar">
            <div class="menu">
                <h3 class="menu">Home</h3>
                <h3 class="menu">Project</h3>
                <h3 class="menu">Blog</h3>
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
/* * {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
} */
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
}
</style>
