<template>
	<div id="add-new-car">
		<h1>Add New Car</h1>
		<new-car-form></new-car-form>
	</div>
</template>

<script>
// Imports
import NewCarForm from "@/components/NewCarForm.vue";

export default {
	components: { NewCarForm },
	name: "AddNewCarPage",
};
</script>
<style scoped>
#add-new-car {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
