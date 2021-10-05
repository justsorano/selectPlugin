import '../scss/style.scss'
import { Select } from './select/select'
const $ = {}
window.$ = $

const select = new Select({
   placeholder:'Выберете елемент',
   data:[
   {id:1,name:'Яблоко'},
   {id:1,name:'Ананас'},
   {id:1,name:'Грейпфрут'},
   {id:1,name:'Манго'},
   {id:1,name:'Апельсин'},
   {id:1,name:'Кокос'},
],
   selectedId: 4,
})