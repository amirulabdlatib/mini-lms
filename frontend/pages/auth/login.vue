<script setup>
    const { login: loginAction } = useSanctumAuth();
    const form = reactive({
        email: "admin@example.com",
        password: "password",
    });

    const login = async () => {
        await loginAction(form);
    };
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="form.email" />
            <input type="password" placeholder="Password" v-model="form.password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>
