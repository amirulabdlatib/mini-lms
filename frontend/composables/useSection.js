export const useSection = () => {
    const sections = ref([]);
    const sanctumFetch = useSanctumClient();

    async function fetchSections(class_id) {
        try {
            const response = await sanctumFetch("/api/sections?class_id=" + class_id);
            console.log(response);
            sections.value = response;
        } catch (error) {
            console.log(error);
        }
    }

    return { sections, fetchSections };
};
