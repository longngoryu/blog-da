<template>
    <CommentList style="text-align: center" :products="products" @editProduct="handleEditProduct"
        @productDeleted="fetchProducts" />

    <br />

    <!--  -->
    <div
    class="flex flex-col max-w-xl p-8 rounded-xl lg:p-12 mx-auto dark:bg-gray-50 dark:text-gray-800"
    style="margin-top: 50px; box-shadow: 1px 2px 4px 5px gray"
  >
    <div class="flex flex-col items-center w-full">
      <h2 class="text-3xl font-semibold text-center">Hãy để lại đánh giá của bạn</h2>
      <div class="flex flex-col items-center py-6 space-y-3">
        <span class="text-center">Bạn thấy blog như nào?</span>
        
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col w-full">
          <div style="text-align: center">
            <CommentForm
              :editingProduct="editingProduct"
              :isEditing="isEditing"
              @productAdded="fetchProducts"
              @productUpdated="handleProductUpdated"
              @cancelEdit="handleCancelEdit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>

    <br />
</template>
<script setup>
import { ref, onMounted } from "vue";
import CommentList from "./CommentList.vue";
import CommentForm from "./CommentForm.vue";
import { supabase } from "../supabase.js";


// Declare reactive state
const products = ref([]);
const isEditing = ref(false);
const editingProduct = ref({ id: null, name: "", description: "", price: 0 });

// Fetch products on component mount
onMounted(async () => {
    fetchProducts();
});

// Function to fetch products from the database
const fetchProducts = async () => {
    const { data } = await supabase.from("products").select();
    products.value = data;
};

// Handle product edit
const handleEditProduct = (product) => {
    isEditing.value = true;
    editingProduct.value = { ...product };
};

// Handle product update
const handleProductUpdated = () => {
    isEditing.value = false;
    editingProduct.value = { id: null, name: "", description: "", price: 0, image: "" };
    fetchProducts();
};


// Handle edit cancellation
const handleCancelEdit = () => {
    isEditing.value = false;
    editingProduct.value = { id: null, name: "", description: "", price: 0, image: "" };
};


</script>
