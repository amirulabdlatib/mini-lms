<template>
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <!-- Header -->
            <div class="bg-gray-50 px-6 py-4 border-b">
                <h1 class="text-2xl font-bold text-gray-900">Students</h1>
            </div>

            <!-- Error State -->
            <div v-if="error.message" class="p-6">
                <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <strong class="font-bold">Error:</strong>
                    <span class="block sm:inline ml-1">{{ error.message }}</span>
                </div>
            </div>

            <!-- Students Table -->
            <div v-else-if="students.length > 0" class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="student in students" :key="student.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {{ student.id }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {{ student.name }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ student.email }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ student.class?.name || "N/A" }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ student.section?.name || "N/A" }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ student.created_at }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
                <div class="text-gray-400">
                    <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-2.197m3 2.197V9a3 3 0 00-3-3v5.023a4 4 0 016 0V9a3 3 0 00-3 3v7.023z" />
                    </svg>
                </div>
                <h3 class="mt-2 text-sm font-medium text-gray-900">No students</h3>
                <p class="mt-1 text-sm text-gray-500">Get started by adding some students.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    // Use the student composable
    const { students, error, fetchStudents } = useStudent();

    // Fetch students when component mounts
    onMounted(async () => {
        await fetchStudents();
    });

    // Set page meta
    useSeoMeta({
        title: "Students - Management System",
        description: "View and manage students in the system",
    });
</script>
