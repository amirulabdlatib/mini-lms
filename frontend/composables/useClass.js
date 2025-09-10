export const useClass = () => {
    const sanctumFetch = useSanctumClient();
    const classes = ref({});

    const fetchClasses = async () => {
        try {
            const response = await sanctumFetch("api/classes");
            classes.value = response;
        } catch (error) {
            console.log(error);
        }
    };

    return { classes, fetchClasses };
};
