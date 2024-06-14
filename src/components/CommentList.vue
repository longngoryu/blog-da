<template>
  <div style="text-align: center">
    <ul >
      <li v-for="product in products" :key="product.id" style="padding: 20px">
        <SPan>
          <font-awesome-icon
            :icon="['far', 'circle-user']"
            style="color: #b197fc; font-size: 28px"
          />
        </SPan>
        {{ product.image }}
        <button
          style="
            margin-right: 30px;
            margin-left: 100px;
            width: auto;
            height: auto;
          "
        >
          <b>Nội dung: </b>{{ product.description }}
        </button>
        <button
          style="
            background: linear-gradient(
              rgb(255, 255, 255),
              rgb(61, 94, 255),
              rgb(112, 212, 255)
            );
            width: 100px;
            height: 40px;
            border-radius: 20px;
            color: white;
            margin-right: 30px;
          "
          @click="emit('editProduct', product)"
        >
          Chỉnh sửa
        </button>

        <button
          style="
            background: linear-gradient(
              rgb(255, 255, 255),
              rgb(255, 61, 61),
              rgb(255, 112, 148)
            );
            width: 130px;
            height: 40px;
            border-radius: 10px;
            color: white;
          "
          @click="handleDeleteProduct(product.id)"
        >
          Xóa bình luận
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { supabase } from "../supabase.js";

const emit = defineEmits(["editProduct", "productDeleted"]);

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const handleDeleteProduct = async (id) => {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error(error);
  } else {
    emit("productDeleted");
  }
};
</script>
