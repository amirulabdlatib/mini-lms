<script setup>
    useSeoMeta({
        title: "Create Student",
        description: "Easily add a new student to the student management system. Enter details such as name, email, class, and section to keep records organized.",
    });

    definePageMeta({
        middleware: ["sanctum:auth"],
    });

    const { classes, fetchClasses } = useClass();

    onMounted(async () => {
        await fetchClasses();
    });
</script>

<template>
    <div class="min-h-screen bg-gray-50 py-8">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <!-- Header -->
                <div class="mb-6">
                    <h1 class="text-2xl font-semibold text-gray-900 mb-2">Student Information</h1>
                    <p class="text-sm text-gray-600">Use this form to create a new student.</p>
                </div>

                <!-- Form -->
                <form class="space-y-6">
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
                                placeholder="Enter student name" />
                            <p class="mt-1 text-sm text-red-600">This field is required</p>
                        </div>

                        <!-- Email Field -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Enter email address" />
                        </div>
                    </div>

                    <!-- Class and Section Row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Class Field -->
                        <div>
                            <label for="class" class="block text-sm font-medium text-gray-700 mb-2"> Class </label>
                            <div class="relative">
                                <select
                                    id="class"
                                    name="class"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer transition-colors">
                                    <option value="">Select a Class</option>
                                    <option v-for="item in classes" :key="item.id" :value="item.id">{{ item.name }}</option>
                                </select>
                            </div>
                        </div>

                        <!-- Section Field -->
                        <div>
                            <label for="section" class="block text-sm font-medium text-gray-700 mb-2"> Section </label>
                            <div class="relative">
                                <select
                                    id="section"
                                    name="section"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer transition-colors">
                                    <option value="">Select a Section</option>
                                    <option value="A">Section A</option>
                                    <option value="B">Section B</option>
                                    <option value="C">Section C</option>
                                    <option value="D">Section D</option>
                                </select>
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
