<template>
    <div>
        <div v-if="sections">
            <template v-if="sections.length">
                <q-card v-ripple class="bg-darkl1" v-for="section in sections" :key="section.id" @click="putSections(section)">
                    <q-card-section>
                        <div class="row items-center justify-center">
                            <div class="col">{{section.name}} <span class="text-grey-6">[{{section.path}}]</span></div>
                            <div><q-btn flat round color="light-blue-13" icon="chevron_right"/></div>
                        </div>
                    </q-card-section>
                </q-card>
            </template>
            <template v-else>
                <div class="text-center text-grey-7 q-pa-xl">
                    <q-icon name="fas fa-mug-hot" size="80px"/>
                    <div class="q-pa-md">Nada por aqui</div>
                </div>
            </template>
        </div>

        <q-dialog v-model="wndAddSection.state" position="bottom" :persistent="wndAddSection.persistent" >
            <q-card class="bg-darkl1 exo text-grey-6">
                <q-card-section>Nueva Seccion en {{humanpath}}</q-card-section>
                <q-separator/>
                <q-form @submit="saveSection">
                    <q-card-section>
                        <div class="row items-center q-gutter-sm">
                            <q-input dark color="green-13" v-model="wndAddSection.name" label="Nombre" class="col" autocorrect="off" autocapitalize="none" autofocus/>
                            <q-input dark color="green-13" v-model="wndAddSection.alias" label="Alias" class="col"/>
                            <q-input dark color="green-13" v-model="wndAddSection.elements" label="Elementos" class="col-2" type="number" min="1"/>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        <div class="row justify-around items-center">
                            <q-radio size="xs" dark v-model="wndAddSection.autoinc" color="amber-13" :val="false" label="NO usar secuencia"/>
                            <q-radio size="xs" dark v-model="wndAddSection.autoinc" color="green-13" :val="true" label="Usar secuencia"/>
                        </div>
                    </q-card-section>
                    
                    <q-card-actions v-if="canSaveSection" align="right">
                        <q-btn type="submit" flat rounded color="green-13" :loading="wndAddSection.creating" :disable="wndAddSection.creating" icon="done" :label="wndAddSection.creating?'espera...':'Crear'" no-caps/>
                    </q-card-actions>
                </q-form>

                <q-inner-loading dark :showing="wndAddSection.creating">
                    <q-spinner-gears size="50px" color="white" />
                </q-inner-loading>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import warehousesdb from '../../API/warehouses'
export default {
    props:{
        sections:{type:Array,default:[]}
    },
    data() {
        return {
            // sections:null,
            path:[],
            wndAddSection:{
                state:false,
                name:null,
                alias:null,
                elements:1,
                autoinc:undefined,
                creating:false,
                persistent:false
            },
        }
    },
    methods: {
        openAddSection(){ this.wndAddSection.state=true; },
        saveSection(){
            this.wndAddSection.creating = true;
            this.wndAddSection.persistent = true;
            console.log("Creando seccion");

            let data = {
                "name": this.wndAddSection.name,
                "alias": this.wndAddSection.alias.toUpperCase(),
                "items": this.wndAddSection.elements,
                "root": null,
                "details": null,
                "_celler": null,
                "autoincrement":this.wndAddSection.autoinc
            }

            if(this.inSection){
                data._celler = null;
                data.root = this.path[(this.path.length-1)].id;
            }else{
                data._celler = this.$route.params.idwrh;
                data.root = null;
            }

            console.log(data);
            warehousesdb.addSections(data).then(success=>{
                let _sections = success.data.celler;
                console.log(_sections);
                _sections.forEach(sect => { this.sections.unshift(sect); });
                this.wndAddSection.creating = false;
                this.wndAddSection.persistent = false;
                this.wndAddSection.state = false;
            }).catch(fail=>{
                this.wndAddSection.creating = false;
                this.wndAddSection.persistent = false;
                console.log(fail);
                alert(fail);
            });
        }
    },
}
</script>