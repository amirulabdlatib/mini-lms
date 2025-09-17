export const useStudent = () => {
    const students = ref([]);
    const errors = ref({});
    const sanctumFetch = useSanctumClient();

    const fetchStudents = async () => {
        try {
            errors.value = {};
            const response = await sanctumFetch("/api/students");
            students.value = response;
        } catch (err) {
            errors.value = {
                message: err.message || "Failed to fetch students",
                status: err.status || null,
                data: err.data || null,
            };
            console.error("Error fetching students:", err);
        }
    };

    const createStudent = async (form) => {
        try {
            const response = await sanctumFetch("/api/students", {
                method: "POST",
                body: form,
            });

            return response;
        } catch (error) {
            if (error.statusCode == 422) {
                errors.value = error.data.errors;
            }
            throw error;
        }
    };

    const getStudent = async (id) => {
        try {
            let response = await sanctumFetch("/api/students/" + id);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const updateStudent = async (id, form) => {
        try {
            const response = await sanctumFetch("/api/students/" + id, {
                method: "PUT",
                body: form,
            });

            return response;
        } catch (error) {
            if (error.statusCode == 422) {
                errors.value = error.data.errors;
            }
            throw error;
        }
    };

    const deleteStudent = async (id) => {
        try {
            const response = await sanctumFetch("/api/students/" + id, {
                method: "DELETE",
            });

            return response;
        } catch (error) {
            throw error;
        }
    };

    return {
        students,
        errors,
        fetchStudents,
        createStudent,
        getStudent,
        updateStudent,
        deleteStudent,
    };
};
