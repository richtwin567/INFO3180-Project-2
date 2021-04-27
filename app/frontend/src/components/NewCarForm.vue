<template>
	<section id="new-car-form-container">
		<div class="flashes">
			<div
				v-for="flash in flashes"
				v-bind:class="flash.className"
				v-bind:key="flash.message"
			>
				{{ flash.message }}
			</div>
		</div>
		<form
			@submit.prevent="handleSubmit"
			method="POST"
			enctype="multipart/form-data"
			id="new-car-form"
		>
			<article class="form-fields">
				<div class="form-field">
					<label for="make">Make</label>
					<input
						id="make"
						type="text"
						name="make"
						required
						v-model="make"
					/>
				</div>
				<div class="form-field">
					<label for="model">Model</label>
					<input id="model" type="text" required v-model="model" />
				</div>
			</article>
			<article class="form-fields">
				<div class="form-field">
					<label for="colour">Colour</label>
					<input id="colour" type="text" required v-model="colour" />
				</div>
				<div class="form-field">
					<label for="year">Year</label>
					<input
						id="year"
						type="text"
						required
						v-model="year"
						pattern="[0-9]{4}"
					/>
				</div>
			</article>
			<article class="form-fields">
				<div class="form-field">
					<label for="price">Price</label>
					<input
						id="price"
						type="number"
						min="0.00"
						step="0.01"
						required
						v-model="price"
					/>
				</div>
				<div class="form-field">
					<label for="car_type">Car Type</label>
					<select id="car_type" required v-model="car_type">
						<option>SUV</option>
						<option>Sedan</option>
						<option>Coupe</option>
						<option>Sports Car</option>
						<option>Hatchback</option>
						<option>Convertible</option>
						<option>Station Wagon</option>
						<option>Minivan</option>
						<option>Pickup Truck</option>
					</select>
				</div>
			</article>
			<div class="form-field">
				<label for="transmission">Transmission</label>
				<select id="transmission" required v-model="transmission">
					<option>Automatic</option>
					<option>Manual</option>
					<option>Semi-Automatic</option>
					<option>Dual-Clutch</option>
					<option>Continuously Variable</option>
				</select>
			</div>
			<div class="form-field">
				<label for="description">Description</label>
				<textarea
					id="description"
					rows="8"
					cols="50"
					required
					v-model="description"
				></textarea>
			</div>
			<div class="form-field">
				<input
					type="file"
					name="photo"
					ref="photo"
					accept="image/*"
					v-on:change="handleFileUpload()"
				/>
			</div>
			<div class="form-field">
				<button type="submit" id="new-car-btn">Register</button>
			</div>
		</form>
	</section>
</template>

<script>
import * as carService from "@/services/car.service.js";

export default {
	name: "NewCarForm",
	// Keeps track of component state
	data() {
		return {
			make: "",
			model: "",
			colour: "",
			year: "",
			price: 0,
			car_type: "",
			transmission: "",
			description: "",
			photo: "",
			flashes: [],
		};
	},
	methods: {
		handleFileUpload() {
			this.photo = this.$refs.photo.files[0];
		},
		async handleSubmit(e) {
			e.preventDefault();
			// Destructure form fields from state
			const formObj = {
				make: this.make,
				model: this.model,
				colour: this.colour,
				year: this.year,
				price: this.price,
				car_type: this.car_type,
				transmission: this.transmission,
				description: this.description,
				photo: this.photo,
			};

			// Create the form data object
			const formData = new FormData();

			for (let field in formObj) {
				formData.append(field, formObj[field]);
			}

			console.log(formData);
			// Register the user
			let data = await carService.addNewCar(formData);
			console.log(data);
			// Display errors if found
			this.flashes = [];
			if (Object.keys(data).includes("errors")) {
				data.errors.forEach((err) => {
					var errFlashes = err.messages.map((message) => {
						return {
							message: `${err.field} - ${message}`,
							className: "alert alert-danger",
						};
					});
					this.flashes.push(...errFlashes);
				});
			} else {
				this.flashes.push({
					message: "Car added successfully",
					className: "alert alert-success",
				});
			}
		},
	},
};
</script>

<style scoped>
.form-fields {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.form-field {
	margin: 10px 20px;
}

.form-fields input {
	width: 90%;
}
.form-field input,
.form-field textarea,
.form-field select {
	display: block;
	padding: 10px 15px;
	margin: 10px 0px;
	border: 1px solid #c5c5c5;
	border-radius: 5px;
	resize: none;
}

.form-field textarea {
	width: 95%;
}

.form-field input[type="file"] {
	border: none;
	padding: 10px 0px;
}
.form-field label {
	font-weight: bold;
}

#new-car-form-container {
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	border: solid 1px #e5e5e5;
	padding: 20px;
}

#new-car-btn {
	background: #0fb881;
	border: none;
	border-radius: 5px;
	padding: 10px 25px;
	color: #ffffff;
}

#new-car-btn:hover {
	cursor: pointer;
	background: #0a7753;
}

.alert {
	position: relative;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;
	border-radius: 0.25rem;
}

.alert-danger {
	color: #721c24;
	background-color: #f8d7da;
	border-color: #f5c6cb;
}

.alert-success {
	color: #155724;
	background-color: #d4edda;
	border-color: #c3e6cb;
}
</style>
