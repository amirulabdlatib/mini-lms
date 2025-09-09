export const useAuth = () => {
    const sanctumFetch = useSanctumClient();

    const errors = ref({});
    async function register(form) {
        try {
            return await sanctumFetch("/register", {
                method: "POST",
                body: form,
            });
        } catch (error) {
            if (error.statusCode == 422) {
                errors.value = error.data.errors;
            }
        }
    }

    return {
        register,
        errors,
    };
};
