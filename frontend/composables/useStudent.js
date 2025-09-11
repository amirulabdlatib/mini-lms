export const useStudent = () => {
    const students = ref([]);
    const error = ref({});
    const sanctumFetch = useSanctumClient();

    const fetchStudents = async () => {
        try {
            error.value = {};
            const response = await sanctumFetch("/api/students");
            students.value = response;
        } catch (err) {
            error.value = {
                message: err.message || "Failed to fetch students",
                status: err.status || null,
                data: err.data || null,
            };
            console.error("Error fetching students:", err);
        }
    };

    return {
        students,
        error,
        fetchStudents,
    };
};
