<template>
    <form  v-if="!isEditing" @submit.prevent="handleAddProduct">
        <input style="width: 400px; height: 200px;text-align: center;" v-model="newProduct.description"
            placeholder="Nhập bình luận " />
<br>
        <button type="submit" style="width: 300px;box-shadow:2px 3px 1px 3px ;"
            class="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600">Đăng</button>
    </form>
    <form  v-else @submit.prevent="handleUpdateProduct">
      
        <input  style="width: 400px; height: 200px;text-align: center;" v-model="editingProduct.description" placeholder="Nhập bình luận" />

        <br>
        <button type="submit" style="width: 300px;box-shadow:2px 3px 1px 3px ;"
            class="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600">Cập nhật</button>
            <br>
        <button style="width: 200px;box-shadow:2px 3px 3px 1px gray ;" class="btn btn-danger" @click="handleCancelEdit">Hủy</button>
    </form>
    
</template>

<script setup>

import { ref } from 'vue'
import { supabase } from '../supabase.js'

const emit = defineEmits(['productAdded', 'productUpdated', 'cancelEdit'])
const props = defineProps({
    editingProduct: {
        type: Object,
        required: true,
    },
    isEditing: {
        type: Boolean,
        required: true,
    },
})

const newProduct = ref({ name: '', description: '', price: 0,image: '' })

const handleAddProduct = async () => {
    const { data, error } = await supabase
        .from('products')
        .insert([newProduct.value])

    if (error) {
        console.error(error)
    } else {
        newProduct.value = { name: '', description: '', price: 0,image:'' }
        emit('productAdded')
    }
}

const handleUpdateProduct = async () => {
    const { data, error } = await supabase
        .from('products')
        .update({
            name: props.editingProduct.name,
            description: props.editingProduct.description,
            price: props.editingProduct.price,
            image: props.editingProduct.image
        })
        .eq('id', props.editingProduct.id)

    if (error) {
        console.error(error)
    } else {
        emit('productUpdated')
    }
}

const handleCancelEdit = () => {
    emit('cancelEdit')
}


</script>