<template>
  <div class="cream-container">
    <div class="header">
      <h2>All Cream</h2>
      <p>
        <button @click="logout">Logout</button>
        <button @click="navigateTo('/cream/create/')">Create cream</button>
      </p>
    </div>
    <div class="cream-list">
      <div v-for="cream in creams" :key="cream.id" class="cream-item">
        <div class="cream-info">
          <p class="cream-name">{{ cream.name }}</p>
          <p class="cream-brand">{{ cream.brand }}</p>
        </div>
        <div class="cream-actions">
          <button @click="navigateTo(`/cream/${cream.id}`)" class="view-button">ดูข้อมูลสินค้า</button>
          <button @click="navigateTo(`/cream/edit/${cream.id}`)" class="edit-button">แก้ไขข้อมูล</button>
          <button @click="deleteCream(cream)" class="delete-button">ลบข้อมูล</button>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
    import CreamService from '@/services/CreamService';
    
    export default {
      data() {
        return {
          creams: [],
        };
      },
      async created() {
        await this.refreshData();
      },
      methods: {
        async logout() {
          this.$store.dispatch('setToken', null);
          this.$store.dispatch('setUser', null);
          this.$router.push({ name: 'login' });
        },
        navigateTo(route) {
          this.$router.push(route);
        },
        async deleteCream(cream) {
          const result = confirm('Want to delete?');
          if (result) {
            try {
              await CreamService.delete(cream);
              await this.refreshData();
            } catch (error) {
              console.error(error);
            }
          }
        },
        async refreshData() {
          this.creams = (await CreamService.index()).data;
        },
      },
    };
    </script>
    
    <style scoped>
    /* Minimalistic styles for the component */
  
    .cream-container {
      max-width: 100%;
      margin: 0;
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }
  
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #3bc4ce; /* SaddleBrown color */
      padding: 10px;
      color: #fffffc;
    }
  
    h2 {
      margin: 0;
    }
  
    .cream-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
    }
  
    .cream-item {
      box-sizing: border-box;
      width: calc(30.33% - 10px);
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #fff;
    }
  
    .cream-info {
      margin-bottom: 10px;
    }
  
    .cream-name {
      font-weight: bold;
    }
  
    .cream-brand {
      color: #888;
    }
  
    .cream-actions {
      text-align: center;
    }
  
    .cream-actions button {
      margin: 5px;
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      border-radius: 3px;
    }
  
    .view-button {
      background-color: #4CAF50; /* Green color */
      color: white;
    }
  
    .edit-button {
      background-color: #FFD700; /* Yellow color */
      color: #333;
    }
  
    .delete-button {
      background-color: #FF6347; /* Red color */
      color: white;
    }
    /* Add more styles as needed */
  </style>
