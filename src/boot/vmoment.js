import Vue from 'vue'
import moment from 'vue-moment'

Vue.use(moment);

Vue.moment.updateLocale('es', {
    months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthsShort:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    weekdays:['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    weekdaysShort:['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
    week:{dow:1}
});