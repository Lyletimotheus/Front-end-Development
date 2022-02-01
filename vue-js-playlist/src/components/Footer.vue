<template>
    <footer>
        <h1>{{ title }}</h1>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>

export default {
  data() {
    return {
        title: "Footer Ninjas",
        copyright: "Copyright 2022 Vue Tutorial"
    }
  }
}
</script>

<style scoped>
footer{
    margin-top: 100vh;
    padding: 10px;
    background-color: darkmagenta;
}

h1,
p {
    color: rgb(0, 0, 0);
    text-align: center;
}
</style>
