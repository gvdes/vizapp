<template>
    <div class="q-pa-sm q-gutter-sm">
        <q-table title="Treats" :data="data" :columns="columns" row-key="name" binary-state-sort>
            <template v-slot:top>
                <q-btn dense color="secondary" label="Add Row" @click="show_dialog = true" no-caps></q-btn>
            </template>

            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="desc" :props="props">{{ props.row.name }}</q-td>
                    <q-td key="calories" :props="props">{{ props.row.calories }}</q-td>
                    <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
                    <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
                    <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                    <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                    <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                    <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
                    <q-td key="actions" :props="props">
                    <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>
                    <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
                    </q-td>
                </q-tr>
            </template>
        </q-table>

        <q-dialog v-model="show_dialog">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Add new item!</div>
                </q-card-section>

                <q-card-section>
                    <div class="row">
                        <q-input v-model="editedItem.name" label="Dessert Name" />
                        <q-input v-model="editedItem.calories" label="Calories" />
                        <q-input v-model="editedItem.fat" label="Fat" />
                        <q-input v-model="editedItem.carbs" label="Carbs" />
                        <q-input v-model="editedItem.protein" label="Protein" />
                        <q-input v-model="editedItem.sodium" label="Sodium" />
                        <q-input v-model="editedItem.calcium" label="Calcium" />
                        <q-input v-model="editedItem.iron" label="Iron" />
                    </div>
                </q-card-section>
                
                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup @click="addRow" ></q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    methods: {
        addRow() {
            this.editedIndex > -1 ? //
                Object.assign(this.data[this.editedIndex], this.editedItem):
                    this.data.push(this.editedItem);

            this.close();
        },
        deleteItem(item) {
            const index = this.data.indexOf(item);
            confirm("Are you sure you want to delete this item?") && this.data.splice(index, 1);
        },
        editItem(item) {
            this.editedIndex = this.data.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.show_dialog = true;
        },
        close () {
            this.show_dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        }
    },
    data() {
        return {
            show_dialog: false,
            editedIndex: -1,
            editedItem: {
                name: "",
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
                sodium: 0,
                calcium: "0%",
                iron: "0%"
            },
            defaultItem: {
                name: "",
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
                sodium: 0,
                calcium: "0%",
                iron: "0%"
            },
            columns: [
                {
                    name: "desc",
                    required: true,
                    label: "Dessert (100g serving)",
                    align: "left",
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                {
                    name: "calories",
                    align: "center",
                    label: "Calories",
                    field: "calories",
                    sortable: true
                },
                {
                    name: "fat",
                    label: "Fat (g)",
                    field: "fat",
                    sortable: true,
                    style: "width: 10px"
                },
                { name: "carbs", label: "Carbs (g)", field: "carbs" },
                { name: "protein", label: "Protein (g)", field: "protein" },
                { name: "sodium", label: "Sodium (mg)", field: "sodium" },
                {
                    name: "calcium",
                    label: "Calcium (%)",
                    field: "calcium",
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
                },
                {
                    name: "iron",
                    label: "Iron (%)",
                    field: "iron",
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
                },
                {
                    name: "actions",
                    label: "Actions",
                    field: "actions"
                }
            ],
            data: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: "14%",
                    iron: "1%"
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    sodium: 129,
                    calcium: "8%",
                    iron: "1%"
                },
                {
                    name: "Eclair",
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    sodium: 337,
                    calcium: "6%",
                    iron: "7%"
                },
                {
                    name: "Cupcake",
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    sodium: 413,
                    calcium: "3%",
                    iron: "8%"
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    sodium: 327,
                    calcium: "7%",
                    iron: "16%"
                },
                {
                    name: "Jelly bean",
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    sodium: 50,
                    calcium: "0%",
                    iron: "0%"
                },
                {
                    name: "Lollipop",
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    sodium: 38,
                    calcium: "0%",
                    iron: "2%"
                },
                {
                    name: "Honeycomb",
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    sodium: 562,
                    calcium: "0%",
                    iron: "45%"
                },
                {
                    name: "Donut",
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    sodium: 326,
                    calcium: "2%",
                    iron: "22%"
                },
                {
                    name: "KitKat",
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    sodium: 54,
                    calcium: "12%",
                    iron: "6%"
                }
            ]
        };
    }
}
</script>