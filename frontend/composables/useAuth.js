export const useAuth = () => {
    const sanctumFetch = useSanctumClient();
    async function register(form) {
        await sanctumFetch("/register", {
            method: "POST",
            body: form,
        });
    }

    return {
        register,
    };
};
