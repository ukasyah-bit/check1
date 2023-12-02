<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Artikel</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage user data here</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-user">
                        <button class="bt-green">+ Add User</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>ARTICLE NAME</th>
                            <th>BROADCASH SCEDULE</th>
                            <th>VALID FROM</th>
                            <th>VALID UNTIL</th>
                            <th>ARTICLE STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_user" :key="item.id">
                            <td class="center">{{ item.namearticle }}</td>
                            <td class="center">{{ item.scedule }}</td>
                            <td class="center">{{ item.validfrom }}</td>
                            <td class="center">{{ item.validuntil }}</td>
                            <td class="center">
                                <div v-if="item.role === 1">
                                    <label class="label-green">Active</label>
                                </div>
                                <div v-if="item.role === 2">
                                    <label class="label-blue">Active</label>
                                </div>
                                
                                
                               
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-user">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-user">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-article',
	components: {
		Menu
	},
    data(){
        return {
            list_user: [
                {
                    id: "1",
                    namearticle: "Produk Rumah dan Funiture",
                    scedule: "Senin",
                    role: 1
                },
                {
                    id: "2",
                    namearticle: "Pakaian dan Outfit",
                    scedule: "Kamis",
                    role: 2
                }
            ]
        }
    }
}
</script>