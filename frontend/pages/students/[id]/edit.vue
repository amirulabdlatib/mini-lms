<script setup>
    useSeoMeta({
        title: "Edit Student",
        description: "Easily update a existing student to the student management system. Update details such as name, email, class, and section to keep records organized.",
    });

    definePageMeta({
        middleware: ["sanctum:auth"],
    });

    const { classes, fetchClasses } = useClass();
    const { sections, fetchSections } = useSection();
    const { updateStudent, errors, getStudent } = useStudent();
    const route = useRoute();

    const form = reactive({
        name: "",
        email: "",
        class_id: "",
        section_id: "",
    });

    const submit = async () => {
        try {
            const id = route.params.id;
            await updateStudent(id, form);
            await navigateTo("/students");
        } catch (error) {
            console.log("Student creation failed:", error);
        }
    };

    watch(
        () => form.class_id,
        async (newValue) => {
            await fetchSections(newValue);
        }
    );

    onMounted(async () => {
        await fetchClasses();
        try {
            let response = await getStudent(route.params.id);
            form.name = response.name;
            form.email = response.email;
            form.class_id = response.class.id;
            form.section_id = response.section.id;
        } catch (error) {
            console.log(error);
        }
    });
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <!-- Header -->
                <div class="mb-6">
                    <h1 class="text-2xl font-semibold text-gray-900 mb-2">Student Information</h1>
                    <p class="text-sm text-gray-600">Use this form to update a existing student.</p>
                </div>

                <!-- Form -->
                <form class="space-y-6" @submit.prevent="submit">
                    <!-- Name and Email Row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Name Field -->
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2"> Name </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Enter student name"
                                v-model="form.name" />
                            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name[0] }}</p>
                        </div>

                        <!-- Email Field -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Enter email address"
                                v-model="form.email" />
                            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email[0] }}</p>
                        </div>
                    </div>

                    <!-- Class and Section Row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Class Field -->
                        <div>
                            <label for="class" class="block text-sm font-medium text-gray-700 mb-2"> Class </label>
                            <div class="relative">
                                <select
                                    v-model="form.class_id"
                                    id="class"
                                    name="class"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer transition-colors">
                                    <option value="">Select a Class</option>
                                    <option v-for="item in classes" :key="item.id" :value="item.id">{{ item.name }}</option>
                                </select>
                                <p v-if="errors.class_id" class="mt-1 text-sm text-red-600">{{ errors.class_id[0] }}</p>
                            </div>
                        </div>

                        <!-- Section Field -->
                        <div>
                            <label for="section" class="block text-sm font-medium text-gray-700 mb-2"> Section </label>
                            <div class="relative">
                                <select
                                    v-model="form.section_id"
                                    id="section"
                                    name="section"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer transition-colors">
                                    <option value="">Select a Section</option>
                                    <option v-for="section in sections" :value="section.id" :key="section.id">{{ section.name }}</option>
                                </select>
                                <p v-if="errors.section_id" class="mt-1 text-sm text-red-600">{{ errors.section_id[0] }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
