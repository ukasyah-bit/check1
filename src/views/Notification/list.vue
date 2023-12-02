<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Notification</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage your Notifikasi</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-Notification">
                        <button class="bt-green">+ Add Notification</button>
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
                            <th>TILTLE</th>
                            <th>BROADCAST SCHEDULE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_notification" :key="item.id">
                            <td class="center"><label class="label-red"></label>{{ item.title }}</label></td>
                            <td class="center">{{ item.username }}</td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-notification">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-notification">
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
	name: 'list-notification',
	components: {
		Menu
	},
    data(){
        return {
            list_notification: [
                {
                    id: "1",
                    name: "Diskon 50% untuk Handphone",
                    username: "07-06-2021 09:41 PM",
                    role: 1
                },
                {
                    id: "2",
                    name: "Diskon 10% untuk Handphone Iphone 11",
                    username: "09-06-2021 09:41 PM",
                    role: 2
                },
            ]
        }
    }
}
</script>