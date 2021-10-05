import '../scss/style.scss'
import { Select } from './select/select'
const $ = {}
window.$ = $
$.select = new Select({
   placeholder:'Выберете елемент',
   data:[
   {id:1,name:'Яблоко'},
   {id:2,name:'Ананас'},
   {id:3,name:'Грейпфрут'},
   {id:4,name:'Манго'},
   {id:5,name:'Апельсин'},
   {id:6,name:'Кокос'},
],
   selectedId: 4,
})
