<template>
    <div>
        <body>
        <div class="main">
        <h1 class="logo">Login</h1>
        <div class="container">
            <input type="text" placeholder="ID" id="id" class="account">
            <input type="password" placeholder="Password" id="password" class="account">
            <button id="login" class="account">login</button>
            <p id="alert" class="account"> </p>
            
        </div>
    </div>   
    <link rel="stylesheet" href="css/login.css">
</body>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.main {
    width: 1260px;
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid lightgrey;
    border-radius: 5px;
}

.logo {
        margin-top: 0px;
        margin-bottom: 40px;
}


#login {
    width: 100%;
    background-color: skyblue;
    border-color: transparent;
    color: white;
}

.account {
    display: block;
    margin-bottom: 3px;
    padding: 3px;
    border: 1px solid lightgray;
    border-radius: 3px;
}

#alert {
    border-color: transparent;
}

    
</style>
